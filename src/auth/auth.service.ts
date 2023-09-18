import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { hash, verify } from 'argon2';
import { JwtPayload } from './types/jwtPayload.type';
import { DbService } from 'src/db/db.service';
import { SigninDto } from './dto';
import { Tokens } from './types';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto';
import { UserEntity } from 'src/entities/user.entity';
import { NextFunction, Response } from 'express';
import passport from 'passport';
import * as ldap from 'ldapjs';
import Cookies from 'universal-cookie';

@Injectable()
export class AuthService {
  constructor(
    private db: DbService,
    private jwt: JwtService,
    private config: ConfigService,
    private usersService: UsersService,
  ) {}

  async signin(
    dto: SigninDto,
    res: Response,
  ): Promise<{ tokens: Tokens; user: any }> {
    // find the user by username
    const user = await this.db.user.findFirst({
      where: {
        OR: [
          { username: dto.username },
          { email: dto.email },
          { nik: dto.nik },
        ],
      },
      select: {
        id: true,
        username: true,
        email: true,
        nik: true,
        userRole: {
          select:{
            name:true
          }
        },
        hashedPassword: true,
        profile: {
          select: {
            name: true,
            profilePic: true,
            phone: true,
            division: true,
            position: true,
            doB: true,
            alamat: true,
          },
        },
      },
    });
    // if (isLdap) {
    //   const isAuthenticated = await this.ldapAuthService.authenticate(username, password);
    //   if (!isAuthenticated) {
    //     return { message: 'LDAP Authentication Failed' };
    //   }
    //   // Perform additional actions or return JWT token or any other response
    //   return { message: 'LDAP Authentication Successful' };
    // } else {
    //   // Handle non-LDAP authentication logic here
    //   return { message: 'Non-LDAP Authentication' };
    // }
    // if user does not exist throw exception
    if (!user) throw new ForbiddenException('Invalid username or password.');

    // compare password
    const pwMatches = await verify(user.hashedPassword, dto.password);

    // if password incorrect throw exception
    if (!pwMatches)
      throw new ForbiddenException('Invalid username or password.');

    // send back the user
    delete user.hashedPassword; // Tidak perlu lg karena sudah pakai return jwt

    // using access_token and refresh_token now, not just single jwt
    // return this.signToken(user.id, user.username, user.role);
    const tokens = await this.signTokens({
      sub: user.id,
      username: user.username,
      role: user.userRole.name,
    });

    await this.updateRtHash(user.id, tokens.refresh_token);

    res.cookie('at', tokens.access_token, {
      httpOnly: true,
      sameSite: 'lax',
    });
    res.cookie('rt', tokens.refresh_token, {
      httpOnly: true,
      sameSite: 'lax',
    });

    return { tokens, user };
  }

  async authenticate(username: string, password: string): Promise<boolean> {
    const ldapUrl = 'ldap://your-ldap-server-url';
    const ldapBaseDN = 'dc=example,dc=com'; // The Base DN of your LDAP server

    const client = ldap.createClient({
      url: ldapUrl,
    });

    return new Promise<boolean>((resolve, reject) => {
      client.bind(`cn=${username},${ldapBaseDN}`, password, (err) => {
        if (err) {
          // LDAP authentication failed
          resolve(false);
        } else {
          // LDAP authentication successful
          resolve(true);
        }
        client.unbind();
      });
    });
  }

  async fakeLdapAuth(username: string, password: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve({
          username,
          password,
        });
      });
    });
  }

  async ldapSignin(
    user: any,
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<{ tokens: Tokens; user: any }> {
    // find the user by username
    const userLdap = await this.db.user.findUnique({
      where: { username: user.username, isLDAPUser: true },
    });
    passport.authenticate('ldapauth', { session: false }, (err, user, info) => {
      var error = err || info;

      if (error) {
        return res.send({
          status: 500,
          data: error,
        });
      }
      if (!user) {
        return res.send({
          status: 404,
          data: 'User Not Found',
        });
      } else {
        return res.send({
          status: 200,
          data: user,
        });
      }
    })(req, res, next);
    // using access_token and refresh_token now, not just single jwt
    // return this.signToken(user.id, user.username, user.role);
    const tokens = await this.signTokens({
      sub: user.id,
      username: user.username,
      role: user.role,
    });
    return { tokens, user };
  }

  async getIAM(id: string): Promise<UserEntity> {
    const user = await this.usersService.getIAM(id);

    return user;
  }

  async signout(userId: string, res: Response): Promise<boolean> {
    const updatedCount = await this.removeRtHash(userId);

    res.clearCookie('at');
    res.clearCookie('rt');

    return updatedCount.count > 0 ? true : false;
  }

  async refreshToken(
    userId: string,
    rt: string,
    res: Response,
  ): Promise<Tokens> {
    const user = await this.db.user.findUnique({
      where: {
        id: userId,
      },
      include:{
        userRole:{
          select:{
            name:true
          }
        }
      }
    });

    if (!user || !user.hashedRT) throw new ForbiddenException('Access Denied');

    const rtMatches = await verify(user.hashedRT, rt);

    if (!rtMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.signTokens({
      sub: user.id,
      username: user.email,
      role: user.userRole.name,
    });

    await this.updateRtHash(user.id, tokens.refresh_token);

    res.cookie('at', tokens.access_token, {
      httpOnly: true,
      sameSite: 'strict',
    });
    res.cookie('rt', tokens.refresh_token, {
      httpOnly: true,
      sameSite: 'strict',
    });

    return tokens;
  }

  async updateRtHash(userId: string, rt: string) {
    const hashedRT = await hash(rt);

    await this.db.user.update({
      where: {
        id: userId,
      },
      data: {
        hashedRT,
      },
    });
  }

  async removeRtHash(userId) {
    // Only updates if hashedRefreshToken is not null to avoid
    // unecessary updates on database.
    return await this.db.user.updateMany({
      where: {
        id: userId,
        hashedRT: {
          not: null,
        },
      },
      data: {
        hashedRT: null,
      },
    });
  }

  async signToken(jwtPayload: JwtPayload): Promise<{ access_token: string }> {
    const secret = this.config.get('WBMS_JWT_KEY');
    const token = await this.jwt.signAsync(jwtPayload, {
      secret,
      expiresIn: '15m',
    });

    return { access_token: token };
  }

  async signTokens(jwtPayload: JwtPayload): Promise<Tokens> {
    const secret_at = this.config.get('WBMS_JWT_AT_KEY');
    const secret_rt = this.config.get('WBMS_JWT_RT_KEY');

    const [at, rt] = await Promise.all([
      // 60s*15 = 15m
      await this.jwt.signAsync(jwtPayload, {
        secret: secret_at,
        expiresIn: 60 * 60 * 15,
      }),
      await this.jwt.signAsync(jwtPayload, {
        secret: secret_rt,
        expiresIn: 60 * 60 * 24 * 7,
      }),
    ]);

    return { access_token: at, refresh_token: rt, access_type: 'Bearer' };
  }
}
