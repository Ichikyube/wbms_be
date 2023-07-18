import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { DbService } from 'src/db/db.service';
import { SigninDto } from './dto';
import { Tokens } from './types';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { Response } from 'express';
export declare class AuthService {
    private db;
    private jwt;
    private config;
    private usersService;
    constructor(db: DbService, jwt: JwtService, config: ConfigService, usersService: UsersService);
    signup(dto: CreateUserDto): Promise<UserEntity>;
    signin(dto: SigninDto, res: Response): Promise<{
        tokens: Tokens;
        user: any;
    }>;
    getIAM(id: string): Promise<UserEntity>;
    signout(userId: string, res: Response): Promise<boolean>;
    refreshToken(userId: string, rt: string, res: Response): Promise<Tokens>;
    updateRtHash(userId: string, rt: string): Promise<void>;
    signToken(userId: string, username: string): Promise<{
        access_token: string;
    }>;
    signTokens(userId: string, username: string): Promise<Tokens>;
}
