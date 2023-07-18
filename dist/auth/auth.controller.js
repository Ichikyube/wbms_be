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
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const guards_1 = require("../common/guards");
const dto_1 = require("./dto");
const dto_2 = require("../users/dto");
let AuthController = exports.AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async getIAM(req) {
        const dataOut = {
            status: true,
            message: "",
            data: {
                user: null,
            },
            logs: {},
        };
        try {
            const user = await this.authService.getIAM(req.user["id"]);
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
    async signup(dto) {
        const dataOut = {
            status: true,
            message: "",
            data: {
                user: null,
            },
            logs: {},
        };
        try {
            const user = await this.authService.signup(dto);
            const { username, email, nik, name, division, position, phone } = user;
            dataOut.data.user = {
                username,
                email,
                nik,
                name,
                division,
                position,
                phone,
            };
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = Object.assign(Object.assign({}, dataOut.logs), { error });
        }
        return dataOut;
    }
    async signin(dto, res) {
        const dataOut = {
            status: true,
            message: "",
            data: {
                tokens: null,
                user: null,
            },
            logs: {},
        };
        try {
            const { tokens, user } = await this.authService.signin(dto, res);
            dataOut.data.tokens = tokens;
            dataOut.data.user = user;
            dataOut.message = "Signed in successfully.";
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = Object.assign(Object.assign({}, dataOut.logs), { error });
        }
        return dataOut;
    }
    async signout(req, res) {
        const dataOut = {
            status: true,
            message: "",
            data: {},
            logs: {},
        };
        try {
            const isSuccess = await this.authService.signout(req.user["sub"], res);
            if (isSuccess) {
                dataOut.message = "Signed out successfully.";
            }
            else {
                dataOut.status = false;
                dataOut.message = "Already signed out.";
            }
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = Object.assign(Object.assign({}, dataOut.logs), { error });
        }
        return dataOut;
    }
    async refreshToken(req, res) {
        const dataOut = {
            status: true,
            message: "",
            data: {
                tokens: null,
            },
            logs: {},
        };
        try {
            const tokens = await this.authService.refreshToken(req.user["sub"], req.user["refreshToken"], res);
            dataOut.data.tokens = tokens;
            dataOut.message = "Token refreshed successfully.";
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = Object.assign(Object.assign({}, dataOut.logs), { error });
        }
        return dataOut;
    }
};
__decorate([
    (0, common_1.Get)("iam"),
    (0, common_1.UseGuards)(guards_1.AtGuard),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getIAM", null);
__decorate([
    (0, common_1.Post)("signup"),
    (0, common_1.UseGuards)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_2.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)("signin"),
    (0, common_1.UseGuards)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SigninDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signin", null);
__decorate([
    (0, common_1.Post)("signout"),
    (0, common_1.UseGuards)(guards_1.AtGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signout", null);
__decorate([
    (0, common_1.Post)("refresh"),
    (0, common_1.UseGuards)(guards_1.RtGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)("Auth"),
    (0, common_1.Controller)("api/auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map