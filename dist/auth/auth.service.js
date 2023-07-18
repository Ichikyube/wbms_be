"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const argon2_1 = require("argon2");
const db_service_1 = require("../db/db.service");
const users_service_1 = require("../users/users.service");
let AuthService = exports.AuthService = class AuthService {
    constructor(db, jwt, config, usersService) {
        this.db = db;
        this.jwt = jwt;
        this.config = config;
        this.usersService = usersService;
    }
    async signup(dto) {
        const user = await this.usersService.create(dto);
        return user;
    }
    async signin(dto, res) {
        const user = await this.db.user.findFirst({
            where: {
                OR: [{ username: dto.username }, { email: dto.email }, { nik: dto.nik }]
            },
            select: {
                id: true,
                username: true,
                email: true,
                nik: true,
                name: true,
                role: true,
                hashedPassword: true
            }
        });
        if (!user)
            throw new common_1.ForbiddenException('Invalid username or password.');
        const pwMatches = await (0, argon2_1.verify)(user.hashedPassword, dto.password);
        if (!pwMatches)
            throw new common_1.ForbiddenException('Invalid username or password.');
        delete user.hashedPassword;
        const tokens = await this.signTokens(user.id, user.username);
        await this.updateRtHash(user.id, tokens.refresh_token);
        res.cookie('at', tokens.access_token, {
            httpOnly: true,
            sameSite: 'lax'
        });
        res.cookie('rt', tokens.refresh_token, {
            httpOnly: true,
            sameSite: 'lax'
        });
        return { tokens, user };
    }
    async getIAM(id) {
        const user = await this.usersService.getIAM(id);
        return user;
    }
    async signout(userId, res) {
        const updatedCount = await this.db.user.updateMany({
            where: {
                id: userId,
                hashedRT: {
                    not: null
                }
            },
            data: {
                hashedRT: null
            }
        });
        res.clearCookie('at');
        res.clearCookie('rt');
        return updatedCount.count > 0 ? true : false;
    }
    async refreshToken(userId, rt, res) {
        const user = await this.db.user.findUnique({
            where: {
                id: userId
            }
        });
        if (!user)
            throw new common_1.ForbiddenException('Access Denied');
        const rtMatches = await (0, argon2_1.verify)(user.hashedRT, rt);
        if (!rtMatches)
            throw new common_1.ForbiddenException('Access Denied');
        const tokens = await this.signTokens(user.id, user.username);
        await this.updateRtHash(user.id, tokens.refresh_token);
        res.cookie('at', tokens.access_token, {
            httpOnly: true,
            sameSite: 'strict'
        });
        res.cookie('rt', tokens.refresh_token, {
            httpOnly: true,
            sameSite: 'strict'
        });
        return tokens;
    }
    async updateRtHash(userId, rt) {
        const hashedRT = await (0, argon2_1.hash)(rt);
        await this.db.user.update({
            where: {
                id: userId
            },
            data: {
                hashedRT
            }
        });
    }
    async signToken(userId, username) {
        const payload = {
            sub: userId,
            username
        };
        const secret = this.config.get('WBMS_JWT_KEY');
        const token = await this.jwt.signAsync(payload, {
            secret,
            expiresIn: '15m'
        });
        return { access_token: token };
    }
    async signTokens(userId, username) {
        const payload = {
            sub: userId,
            username
        };
        const secret_at = this.config.get('WBMS_JWT_AT_KEY');
        const secret_rt = this.config.get('WBMS_JWT_RT_KEY');
        const [at, rt] = await Promise.all([
            await this.jwt.signAsync(payload, {
                secret: secret_at,
                expiresIn: 60 * 15
            }),
            await this.jwt.signAsync(payload, {
                secret: secret_rt,
                expiresIn: 60 * 60 * 24 * 7
            })
        ]);
        return { access_token: at, refresh_token: rt };
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService,
        jwt_1.JwtService,
        config_1.ConfigService,
        users_service_1.UsersService])
], AuthService);
//# sourceMappingURL=auth.service.js.map