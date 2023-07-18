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
exports.TransactionController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const transactions_service_1 = require("./transactions.service");
const dto_1 = require("./dto");
let TransactionController = exports.TransactionController = class TransactionController {
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    getAll() {
        return this.transactionService.getAll();
    }
    getById(id) {
        return this.transactionService.getById(id);
    }
    openCreateByQrcodeSemai(body) {
        return this.transactionService.openCreateByQrcodeSemai(body);
    }
    searchMany(query) {
        return this.transactionService.searchMany(query);
    }
    searchFirst(query) {
        return this.transactionService.searchFirst(query);
    }
    searchByQR(query) {
        return this.transactionService.searchByQR(query);
    }
    getByPlateNo(query) {
        return this.transactionService.getByPlateNo(query);
    }
    create(dto) {
        return this.transactionService.create(dto);
    }
    updateById(id, dto) {
        return this.transactionService.updateById(id, dto);
    }
};
__decorate([
    (0, common_1.Get)(''),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)('open-create-qrcode-semai'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "openCreateByQrcodeSemai", null);
__decorate([
    (0, common_1.Post)('search-many'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "searchMany", null);
__decorate([
    (0, common_1.Post)('search-first'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "searchFirst", null);
__decorate([
    (0, common_1.Get)('search-qr'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "searchByQR", null);
__decorate([
    (0, common_1.Get)('getByPlateNo'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "getByPlateNo", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateTransactionDto]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "updateById", null);
exports.TransactionController = TransactionController = __decorate([
    (0, common_1.Controller)('api/transactions'),
    __metadata("design:paramtypes", [transactions_service_1.TransactionService])
], TransactionController);
//# sourceMappingURL=transactions.controller.js.map