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
exports.CompanyEntity = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class CompanyEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, refType: { required: true, type: () => Number }, refId: { required: true, type: () => String }, code: { required: true, type: () => String }, codeSap: { required: true, type: () => String }, name: { required: true, type: () => String }, shortName: { required: true, type: () => String }, address: { required: true, type: () => String }, addressExt: { required: true, type: () => String }, postalCode: { required: true, type: () => String }, country: { required: true, type: () => String }, province: { required: true, type: () => String }, city: { required: true, type: () => String }, phone: { required: true, type: () => String }, url: { required: true, type: () => String }, contactName: { required: true, type: () => String }, contactEmail: { required: true, type: () => String }, contactPhone: { required: true, type: () => String }, isMillOperator: { required: true, type: () => Boolean }, isTransporter: { required: true, type: () => Boolean }, isSiteOperator: { required: true, type: () => Boolean }, isEstate: { required: true, type: () => Boolean }, isDeleted: { required: true, type: () => Boolean }, userCreated: { required: true, type: () => String }, userModified: { required: true, type: () => String }, dtCreated: { required: true, type: () => Date }, dtModified: { required: true, type: () => Date } };
    }
}
exports.CompanyEntity = CompanyEntity;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CompanyEntity.prototype, "refType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyEntity.prototype, "refId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyEntity.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyEntity.prototype, "codeSap", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyEntity.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyEntity.prototype, "shortName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyEntity.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyEntity.prototype, "addressExt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyEntity.prototype, "postalCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyEntity.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyEntity.prototype, "province", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyEntity.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyEntity.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyEntity.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyEntity.prototype, "contactName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyEntity.prototype, "contactEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyEntity.prototype, "contactPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CompanyEntity.prototype, "isMillOperator", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CompanyEntity.prototype, "isTransporter", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CompanyEntity.prototype, "isSiteOperator", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CompanyEntity.prototype, "isEstate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CompanyEntity.prototype, "isDeleted", void 0);
//# sourceMappingURL=company.entity.js.map