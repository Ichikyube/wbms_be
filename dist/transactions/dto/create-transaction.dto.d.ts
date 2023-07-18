import { QrcodeDto } from "src/semai/dto/qrcode.dt";
export declare class CreateTransactionDto {
    tType: number;
    bonTripNo?: string;
    vehicleStatus: number;
    deliveryStatus: number;
    progressStatus: number;
    deliveryOrderId?: string;
    deliveryOrderNo?: string;
    deliveryDate?: Date;
    productId?: string;
    productCode?: string;
    productName?: string;
    transporterId?: string;
    transporterCompanyCode?: string;
    transporterCompanyName?: string;
    transporterCompanyShortName?: string;
    driverId?: string;
    driverNik?: string;
    driverName?: string;
    driverLicenseNo?: string;
    transportVehicleId?: string;
    transportVehiclePlateNo?: string;
    transportVehicleProductCode?: string;
    transportVehicleProductName?: string;
    transportVehicleSccModel?: number;
    originWeighInKg: number;
    originWeighInRemark?: string;
    originWeighInOperatorName?: string;
    originWeighInTimestamp?: Date;
    originWeighOutKg: number;
    originWeighOutRemark?: string;
    originWeighOutOperatorName?: string;
    originWeighOutTimestamp?: Date;
    potonganWajib: number;
    potonganLain: number;
    returnWeighInKg: number;
    returnWeighInRemark?: string;
    returnWeighInOperatorName?: string;
    returnWeighInTimestamp?: Date;
    returnWeighOutKg: number;
    returnWeighOutRemark?: string;
    returnWeighOutOperatorName?: string;
    returnWeighOutTimestamp?: Date;
    currentSeal1?: string;
    currentSeal2?: string;
    currentSeal3?: string;
    currentSeal4?: string;
    jsonData: QrcodeDto;
}
