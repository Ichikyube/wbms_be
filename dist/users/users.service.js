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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const argon2_1 = require("argon2");
const db_service_1 = require("../db/db.service");
const entities_1 = require("./entities");
let UsersService = exports.UsersService = class UsersService {
    constructor(db) {
        this.db = db;
    }
    async getIAM(id) {
        const user = await this.db.user.findUnique({ where: { id } });
        delete user.hashedPassword;
        delete user.hashedRT;
        return user;
    }
    async getAll() {
        const records = await this.db.user.findMany({
            where: { isDeleted: false }
        });
        return records;
    }
    async getAllDeleted() {
        const records = await this.db.user.findMany({
            where: { isDeleted: true }
        });
        return records;
    }
    async getById(id) {
        const user = await this.db.user.findUnique({ where: { id } });
        return user;
    }
    async create(dto) {
        const hashedPassword = await (0, argon2_1.hash)(dto.password);
        const user = await this.db.user
            .create({
            data: {
                username: dto.username,
                email: dto.email,
                nik: dto.nik,
                name: dto.name,
                division: dto.division,
                position: dto.position,
                phone: dto.phone,
                hashedPassword: hashedPassword,
                role: dto.role
            }
        })
            .catch((error) => {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002')
                    throw new common_1.ForbiddenException('Username/Email/NIK already taken.');
            }
            throw error;
        });
        return user;
    }
    async updateById(id, dto) {
        let updateData = new entities_1.UserEntity();
        if (dto.password)
            updateData.hashedPassword = await (0, argon2_1.hash)(dto.password);
        delete dto.password;
        updateData = Object.assign(Object.assign({}, updateData), dto);
        const user = await this.db.user
            .update({
            where: { id },
            data: Object.assign({}, updateData)
        })
            .catch((error) => {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002')
                    throw new common_1.ForbiddenException('Credentials taken.');
            }
            throw error;
        });
        return user;
    }
    async deleteById(id) {
        const user = await this.db.user.update({
            where: { id },
            data: { isDisabled: true, isDeleted: true }
        });
        return user;
    }
    searchFirst(query) {
        throw new Error('Method not implemented.');
    }
    searchMany(query) {
        throw new Error('Method not implemented.');
    }
    searchFirstDeleted(query) {
        throw new Error('Method not implemented.');
    }
    searchManyDeleted(query) {
        throw new Error('Method not implemented.');
    }
};
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], UsersService);
//# sourceMappingURL=users.service.js.map