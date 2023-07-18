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
exports.SemaiController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const semai_service_1 = require("./semai.service");
const dto_1 = require("./dto");
let SemaiController = exports.SemaiController = class SemaiController {
    constructor(semaiService) {
        this.semaiService = semaiService;
    }
    products() {
        return this.semaiService.products();
    }
    sites() {
        return this.semaiService.sites();
    }
    storageTanks() {
        return this.semaiService.storageTanks();
    }
    transportVehicles() {
        return this.semaiService.transportVehicles();
    }
    transporters() {
        return this.semaiService.transporters();
    }
    vehicleOperators() {
        return this.semaiService.vehicleOperators();
    }
    decodeQrcode(dto) {
        return this.semaiService.decodeQrcode(dto);
    }
    dispatchDelivery(dto) {
        return this.semaiService.dispatchDelivery(dto);
    }
    rejectDelivery(dto) {
        return this.semaiService.rejectDelivery(dto);
    }
    closeDeliveryAccepted(dto) {
        return this.semaiService.closeDeliveryCanceled(dto);
    }
    closeDeliveryCanceled(dto) {
        return this.semaiService.closeDeliveryCanceled(dto);
    }
    closeDeliveryRejected(dto) {
        return this.semaiService.closeDeliveryRejected(dto);
    }
    validateDispatchDelivery(dto) {
        return this.semaiService.validateDispatchDelivery(dto);
    }
    validateUnloading(dto) {
        return this.semaiService.validateUnloading(dto);
    }
    encodeQrcode(dto) {
        return this.semaiService.encodeQrcode(dto);
    }
};
__decorate([
    (0, common_1.Get)('products'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SemaiController.prototype, "products", null);
__decorate([
    (0, common_1.Get)('sites'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SemaiController.prototype, "sites", null);
__decorate([
    (0, common_1.Get)('storage-tanks'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SemaiController.prototype, "storageTanks", null);
__decorate([
    (0, common_1.Get)('transport-vehicles'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SemaiController.prototype, "transportVehicles", null);
__decorate([
    (0, common_1.Get)('transporters'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SemaiController.prototype, "transporters", null);
__decorate([
    (0, common_1.Get)('vehicle-operators'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SemaiController.prototype, "vehicleOperators", null);
__decorate([
    (0, common_1.Post)('decode-qrcode'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.DecodeQrcodeDto]),
    __metadata("design:returntype", void 0)
], SemaiController.prototype, "decodeQrcode", null);
__decorate([
    (0, common_1.Post)('dispatch-delivery'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SemaiController.prototype, "dispatchDelivery", null);
__decorate([
    (0, common_1.Post)('reject-delivery'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SemaiController.prototype, "rejectDelivery", null);
__decorate([
    (0, common_1.Post)('close-delivery-as-accepted'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SemaiController.prototype, "closeDeliveryAccepted", null);
__decorate([
    (0, common_1.Post)('close-delivery-as-canceled'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SemaiController.prototype, "closeDeliveryCanceled", null);
__decorate([
    (0, common_1.Post)('close-delivery-as-rejected'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SemaiController.prototype, "closeDeliveryRejected", null);
__decorate([
    (0, common_1.Post)('validate-dispatch-delivery'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SemaiController.prototype, "validateDispatchDelivery", null);
__decorate([
    (0, common_1.Post)('validate-unloading'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SemaiController.prototype, "validateUnloading", null);
__decorate([
    (0, common_1.Post)('encode-qrcode'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SemaiController.prototype, "encodeQrcode", null);
exports.SemaiController = SemaiController = __decorate([
    (0, swagger_1.ApiTags)('Semai'),
    (0, common_1.Controller)('api/semai'),
    __metadata("design:paramtypes", [semai_service_1.SemaiService])
], SemaiController);
//# sourceMappingURL=semai.controller.js.map