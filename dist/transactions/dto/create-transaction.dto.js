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
exports.CreateTransactionDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateTransactionDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { tType: { required: true, type: () => Number }, bonTripNo: { required: false, type: () => String }, vehicleStatus: { required: true, type: () => Number }, deliveryStatus: { required: true, type: () => Number }, progressStatus: { required: true, type: () => Number }, deliveryOrderId: { required: false, type: () => String }, deliveryOrderNo: { required: false, type: () => String }, deliveryDate: { required: false, type: () => Date }, productId: { required: false, type: () => String }, productCode: { required: false, type: () => String }, productName: { required: false, type: () => String }, transporterId: { required: false, type: () => String }, transporterCompanyCode: { required: false, type: () => String }, transporterCompanyName: { required: false, type: () => String }, transporterCompanyShortName: { required: false, type: () => String }, driverId: { required: false, type: () => String }, driverNik: { required: false, type: () => String }, driverName: { required: false, type: () => String }, driverLicenseNo: { required: false, type: () => String }, transportVehicleId: { required: false, type: () => String }, transportVehiclePlateNo: { required: false, type: () => String }, transportVehicleProductCode: { required: false, type: () => String }, transportVehicleProductName: { required: false, type: () => String }, transportVehicleSccModel: { required: false, type: () => Number }, originWeighInKg: { required: true, type: () => Number }, originWeighInRemark: { required: false, type: () => String }, originWeighInOperatorName: { required: false, type: () => String }, originWeighInTimestamp: { required: false, type: () => Date }, originWeighOutKg: { required: true, type: () => Number }, originWeighOutRemark: { required: false, type: () => String }, originWeighOutOperatorName: { required: false, type: () => String }, originWeighOutTimestamp: { required: false, type: () => Date }, potonganWajib: { required: true, type: () => Number }, potonganLain: { required: true, type: () => Number }, returnWeighInKg: { required: true, type: () => Number }, returnWeighInRemark: { required: false, type: () => String }, returnWeighInOperatorName: { required: false, type: () => String }, returnWeighInTimestamp: { required: false, type: () => Date }, returnWeighOutKg: { required: true, type: () => Number }, returnWeighOutRemark: { required: false, type: () => String }, returnWeighOutOperatorName: { required: false, type: () => String }, returnWeighOutTimestamp: { required: false, type: () => Date }, currentSeal1: { required: false, type: () => String }, currentSeal2: { required: false, type: () => String }, currentSeal3: { required: false, type: () => String }, currentSeal4: { required: false, type: () => String }, jsonData: { required: true, type: () => require("../../semai/dto/qrcode.dt").QrcodeDto } };
    }
}
exports.CreateTransactionDto = CreateTransactionDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateTransactionDto.prototype, "tType", void 0);
//# sourceMappingURL=create-transaction.dto.js.map