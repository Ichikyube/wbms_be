import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { QrcodeDto } from 'src/semai/dto/qrcode.dt';

export class CreateTransactionDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
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

  rspoUniqueNumber?: string;
  isccUniqueNumber?: string;

  originSiteCode?: string;
  originSiteName?: string;
  originSourceStorageTankCode?: string;
  originSourceStorageTankName?: string;
  destinationSiteCode?: string;
  destinationSiteName?: string;
  destinationSinkStorageTankCode?: string;
  destinationSinkStorageTankName?: string;

  destinationWeighInRemark?: string;
  destinationWeighInOperatorName?: string;
  destinationWeighInTimestamp?: Date;
  destinationWeighOutRemark?: string;
  destinationWeighOutOperatorName?: string;
  destinationWeighOutTimestamp?: Date;

  loadedSeal1?: string;
  loadedSeal2?: string;
  loadedSeal3?: string;
  loadedSeal4?: string;
  loadingRemark?: string;
  loadingOperatorName?: string;
  loadingTimestamp?: Date;
  unloadedSeal1?: string;
  unloadedSeal2?: string;
  unloadedSeal3?: string;
  unloadedSeal4?: string;
  unloadingRemark?: string;
  unloadingOperatorName?: string;
  unloadingTimestamp?: Date;
  returnUnloadedSeal1?: string;
  returnUnloadedSeal2?: string;
  returnUnloadedSeal3?: string;
  returnUnloadedSeal4?: string;
  returnUnloadingRemark?: string;
  returnUnloadingOperatorName?: string;
  returnUnloadingTimestamp?: Date;

  // jsonData: QrcodeDto;
  rspoSccModel: number;
  isccSccModel: number;
  isccGhgValue: number;
  isccEeeValue: number;
  originSiteId?: string;
  destinationSiteId?: string;
  originFfaPercentage: number;
  originMoistPercentage: number;
  originDirtPercentage: number;
  destinationWeighInKg: number;
  destinationWeighOutKg: number;
}
