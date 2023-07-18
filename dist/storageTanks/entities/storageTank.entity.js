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
exports.StorageTankEntity = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class StorageTankEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, refType: { required: true, type: () => Number }, refId: { required: true, type: () => String }, siteId: { required: true, type: () => String }, siteRefId: { required: true, type: () => String }, siteName: { required: true, type: () => String }, stockOwnerId: { required: true, type: () => String }, stockOwnerRefId: { required: true, type: () => String }, stockOwnerName: { required: true, type: () => String }, productId: { required: true, type: () => String }, productRefId: { required: true, type: () => String }, productName: { required: true, type: () => String }, code: { required: true, type: () => String }, codeSap: { required: true, type: () => String }, name: { required: true, type: () => String }, shortName: { required: true, type: () => String }, description: { required: true, type: () => String }, capacity: { required: true, type: () => Number }, height: { required: true, type: () => Number }, sccModel: { required: true, type: () => Number }, isDeleted: { required: true, type: () => Boolean }, userCreated: { required: true, type: () => String }, userModified: { required: true, type: () => String }, dtCreated: { required: true, type: () => Date }, dtModified: { required: true, type: () => Date } };
    }
}
exports.StorageTankEntity = StorageTankEntity;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StorageTankEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StorageTankEntity.prototype, "refType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StorageTankEntity.prototype, "refId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StorageTankEntity.prototype, "siteId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StorageTankEntity.prototype, "siteRefId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StorageTankEntity.prototype, "siteName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StorageTankEntity.prototype, "stockOwnerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StorageTankEntity.prototype, "stockOwnerRefId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StorageTankEntity.prototype, "stockOwnerName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StorageTankEntity.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StorageTankEntity.prototype, "productRefId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StorageTankEntity.prototype, "productName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StorageTankEntity.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StorageTankEntity.prototype, "codeSap", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StorageTankEntity.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StorageTankEntity.prototype, "shortName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StorageTankEntity.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StorageTankEntity.prototype, "capacity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StorageTankEntity.prototype, "height", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StorageTankEntity.prototype, "sccModel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], StorageTankEntity.prototype, "isDeleted", void 0);
//# sourceMappingURL=storageTank.entity.js.map