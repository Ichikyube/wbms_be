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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const users_service_1 = require("./users.service");
const guards_1 = require("../common/guards");
const dto_1 = require("./dto");
let UsersController = exports.UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getIAM(req) {
        const dataOut = {
            status: true,
            message: '',
            data: {
                user: null,
            },
            logs: {},
        };
        try {
            const user = await this.usersService.getIAM(req.user['id']);
            const { username, email, name, division, position, phone } = user;
            dataOut.data.user = { username, email, name, division, position, phone };
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = Object.assign(Object.assign({}, dataOut.logs), { error });
        }
        return dataOut;
    }
    async getAll() {
        const dataOut = {
            status: true,
            message: '',
            data: {
                user: {
                    page: 0,
                    totalRecords: 0,
                    records: [],
                },
            },
            logs: {},
        };
        try {
            const users = await this.usersService.getAll();
            dataOut.data.user.totalRecords = users.length;
            dataOut.data.user.records = users;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = Object.assign(Object.assign({}, dataOut.logs), { error });
        }
        return dataOut;
    }
    async getAllDeleted() {
        const dataOut = {
            status: true,
            message: '',
            data: {
                user: {
                    page: 0,
                    totalRecords: 0,
                    records: [],
                },
            },
            logs: {},
        };
        try {
            dataOut.data.user.records = await this.usersService.getAllDeleted();
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = Object.assign(Object.assign({}, dataOut.logs), { error });
        }
        return dataOut;
    }
    async getById(userId) {
        const dataOut = {
            status: true,
            message: '',
            data: {
                user: {
                    page: 0,
                    totalRecords: 0,
                    records: [],
                },
            },
            logs: {},
        };
        try {
            const user = await this.usersService.getById(userId);
            const { username, email, name, division, position, phone } = user;
            dataOut.data.user.records.push({
                username,
                email,
                name,
                division,
                position,
                phone,
            });
            dataOut.data.user.totalRecords = 1;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = Object.assign(Object.assign({}, dataOut.logs), { error });
        }
        return dataOut;
    }
    searchFirst(query) {
        return this.usersService.searchFirst(query);
    }
    searchMany(query) {
        return this.usersService.searchMany(query);
    }
    searchFirstDeleted(query) {
        return this.usersService.searchFirstDeleted(query);
    }
    searchDeleted(query) {
        return this.usersService.searchManyDeleted(query);
    }
    async create(dto) {
        const dataOut = {
            status: true,
            message: '',
            data: {
                user: null,
            },
            logs: {},
        };
        try {
            const user = await this.usersService.create(dto);
            const { username, email, name, division, position, phone } = user;
            dataOut.data.user = { username, email, name, division, position, phone };
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = Object.assign(Object.assign({}, dataOut.logs), { reqBody: dto, error });
        }
        return dataOut;
    }
    async updateById(userId, dto) {
        const dataOut = {
            status: true,
            message: '',
            data: {
                user: null,
            },
            logs: {},
        };
        try {
            const user = await this.usersService.updateById(userId, dto);
            const { username, email, name, division, position, phone } = user;
            dataOut.data.user = { username, email, name, division, position, phone };
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = Object.assign(Object.assign({}, dataOut.logs), { reqBody: dto, error });
        }
        return dataOut;
    }
    async deleteById(userId) {
        const dataOut = {
            status: true,
            message: '',
            data: {
                user: null,
            },
            logs: {},
        };
        try {
            const user = await this.usersService.deleteById(userId);
            const { username, email, name, isDisabled, isDeleted } = user;
            dataOut.data.user = { username, email, name, isDisabled, isDeleted };
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = Object.assign(Object.assign({}, dataOut.logs), { reqParam: { userId }, error });
        }
        return dataOut;
    }
};
__decorate([
    (0, common_1.Get)('iam'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getIAM", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('deleted'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllDeleted", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)('search-first'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "searchFirst", null);
__decorate([
    (0, common_1.Post)('search-many'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "searchMany", null);
__decorate([
    (0, common_1.Post)('search-first-deleted'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "searchFirstDeleted", null);
__decorate([
    (0, common_1.Post)('search-many-deleted'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "searchDeleted", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteById", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.UseGuards)(guards_1.AtGuard),
    (0, common_1.Controller)('api/users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map