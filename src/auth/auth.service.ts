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

import { LdapAuthService } from './ldap-auth/ldap-auth.service';
import { ApiBearerAuth } from '@nestjs/swagger';
@ApiBearerAuth()
@Injectable()
export class AuthService {
  constructor(
    private db: DbService,
    private jwt: JwtService,
    private config: ConfigService,
    private usersService: UsersService,
    private ldapAuthService: LdapAuthService,
  ) {}

  async signin(dto: SigninDto): Promise<{ tokens: Tokens; user: any }> {
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
          select: {
            name: true,
            permissions: true
          },
        },
        hashedPassword: true,
        isLDAPUser: true,
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

    // if user does not exist throw exception
    if (!user) throw new ForbiddenException('Invalid username or password.');
    if (user.isLDAPUser) {
      const isAuthenticated = await this.ldapAuthService.authenticate(
        user.username,
        dto.password,
      );
      if (!isAuthenticated) {
        throw new ForbiddenException('LDAP Authentication Failed');
      }
    } else {
      // compare password
      const pwMatches = await verify(user.hashedPassword, dto.password);

      // if password incorrect throw exception
      if (!pwMatches)
        throw new ForbiddenException('Invalid username or password.');
    }

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

    return { tokens, user };
  }

  async getIAM(id: string): Promise<UserEntity> {
    const user = await this.usersService.getIAM(id);

    return user;
  }

  async signout(userId: string, res: Response): Promise<boolean> {
    const updatedCount = await this.removeRtHash(userId);

    return updatedCount.count > 0 ? true : false;
  }

  async refreshToken(userId: string, rt: string): Promise<Tokens> {

    const user = await this.db.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        id: true,
        username: true,
        email: true,
        hashedRT: true,
        userRole: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!user || !user.hashedRT) throw new ForbiddenException('Access Denied');
    const rtMatches = await verify(user.hashedRT, rt);
    if (!rtMatches) throw new ForbiddenException('Access Denied');
    const tokens = await this.signTokens({
      sub: user.id,
      username: user.username,
      role: user.userRole.name,
    });

    await this.updateRtHash(user.id, tokens.refresh_token);

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
      await this.jwt.signAsync(jwtPayload, {
        secret: secret_at,
        expiresIn: '4m',
      }),
      await this.jwt.signAsync(jwtPayload, {
        secret: secret_rt,
        expiresIn: '7d',
      }),
    ]);

    return { access_token: at, refresh_token: rt, access_type: 'Bearer' };
  }
}
