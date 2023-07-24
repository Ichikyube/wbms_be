import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Transaction {
  @ApiProperty({ type: String })
  id: string = undefined;

  @ApiProperty({ type: Number })
  tType: number = 1;

  @ApiPropertyOptional({ type: String })
  bonTripNo?: string = undefined;

  @ApiProperty({ type: Number })
  vehicleStatus: number = undefined;

  @ApiProperty({ type: Number })
  deliveryStatus: number = undefined;

  @ApiProperty({ type: Number })
  progressStatus: number = undefined;

  @ApiPropertyOptional({ type: String })
  deliveryOrderId?: string = undefined;

  @ApiPropertyOptional({ type: String })
  deliveryOrderNo?: string = undefined;

  @ApiPropertyOptional({ type: Date })
  deliveryDate?: Date = undefined;

  @ApiPropertyOptional({ type: String })
  productId?: string = undefined;

  @ApiPropertyOptional({ type: String })
  productCode?: string = undefined;

  @ApiPropertyOptional({ type: String })
  productName?: string = undefined;

  @ApiProperty({ type: Number })
  rspoSccModel: number = undefined;

  @ApiPropertyOptional({ type: String })
  rspoUniqueNumber?: string = undefined;

  @ApiProperty({ type: Number })
  isccSccModel: number = undefined;

  @ApiPropertyOptional({ type: String })
  isccUniqueNumber?: string = undefined;

  @ApiProperty({ type: Number })
  isccGhgValue: number = undefined;

  @ApiProperty({ type: Number })
  isccEeeValue: number = undefined;

  @ApiPropertyOptional({ type: String })
  transporterId?: string = undefined;

  @ApiPropertyOptional({ type: String })
  transporterCompanyCode?: string = undefined;

  @ApiPropertyOptional({ type: String })
  transporterCompanyName?: string = undefined;

  @ApiPropertyOptional({ type: String })
  transporterCompanyShortName?: string = undefined;

  @ApiPropertyOptional({ type: String })
  driverId?: string = undefined;

  @ApiPropertyOptional({ type: String })
  driverNik?: string = undefined;

  @ApiPropertyOptional({ type: String })
  driverName?: string = undefined;

  @ApiPropertyOptional({ type: String })
  driverLicenseNo?: string = undefined;

  @ApiPropertyOptional({ type: String })
  transportVehicleId?: string = undefined;

  @ApiPropertyOptional({ type: String })
  transportVehiclePlateNo?: string = undefined;

  @ApiPropertyOptional({ type: String })
  transportVehicleProductCode?: string = undefined;

  @ApiPropertyOptional({ type: String })
  transportVehicleProductName?: string = undefined;

  @ApiProperty({ type: Number })
  transportVehicleSccModel: number = undefined;

  @ApiPropertyOptional({ type: String })
  originSiteId?: string = undefined;

  @ApiPropertyOptional({ type: String })
  originSiteCode?: string = undefined;

  @ApiPropertyOptional({ type: String })
  originSiteName?: string = undefined;

  @ApiPropertyOptional({ type: String })
  originSourceStorageTankId?: string = undefined;

  @ApiPropertyOptional({ type: String })
  originSourceStorageTankCode?: string = undefined;

  @ApiPropertyOptional({ type: String })
  originSourceStorageTankName?: string = undefined;

  @ApiPropertyOptional({ type: String })
  destinationSiteId?: string = undefined;

  @ApiPropertyOptional({ type: String })
  destinationSiteCode?: string = undefined;

  @ApiPropertyOptional({ type: String })
  destinationSiteName?: string = undefined;

  @ApiPropertyOptional({ type: String })
  destinationSinkStorageTankId?: string = undefined;

  @ApiPropertyOptional({ type: String })
  destinationSinkStorageTankCode?: string = undefined;

  @ApiPropertyOptional({ type: String })
  destinationSinkStorageTankName?: string = undefined;

  @ApiProperty({ type: Number })
  originFfaPercentage: number = undefined;

  @ApiProperty({ type: Number })
  originMoistPercentage: number = undefined;

  @ApiProperty({ type: Number })
  originDirtPercentage: number = undefined;

  @ApiProperty({ type: Number })
  originWeighInKg: number = undefined;

  @ApiPropertyOptional({ type: String })
  originWeighInRemark?: string = undefined;

  @ApiPropertyOptional({ type: String })
  originWeighInOperatorName?: string = undefined;

  @ApiPropertyOptional({ type: Date })
  originWeighInTimestamp?: Date = undefined;

  @ApiProperty({ type: Number })
  originWeighOutKg: number = undefined;

  @ApiPropertyOptional({ type: String })
  originWeighOutRemark?: string = undefined;

  @ApiPropertyOptional({ type: String })
  originWeighOutOperatorName?: string = undefined;

  @ApiPropertyOptional({ type: Date })
  originWeighOutTimestamp?: Date = undefined;

  @ApiProperty({ type: Number })
  potonganWajib: number = undefined;

  @ApiProperty({ type: Number })
  potonganLain: number = undefined;

  @ApiProperty({ type: Number })
  destinationWeighInKg: number = undefined;

  @ApiPropertyOptional({ type: String })
  destinationWeighInRemark?: string = undefined;

  @ApiPropertyOptional({ type: String })
  destinationWeighInOperatorName?: string = undefined;

  @ApiPropertyOptional({ type: Date })
  destinationWeighInTimestamp?: Date = undefined;

  @ApiProperty({ type: Number })
  destinationWeighOutKg: number = undefined;

  @ApiPropertyOptional({ type: String })
  destinationWeighOutRemark?: string = undefined;

  @ApiPropertyOptional({ type: String })
  destinationWeighOutOperatorName?: string = undefined;

  @ApiPropertyOptional({ type: Date })
  destinationWeighOutTimestamp?: Date = undefined;

  @ApiProperty({ type: Number })
  returnWeighInKg: number = undefined;

  @ApiPropertyOptional({ type: String })
  returnWeighInRemark?: string = undefined;

  @ApiPropertyOptional({ type: String })
  returnWeighInOperatorName?: string = undefined;

  @ApiPropertyOptional({ type: Date })
  returnWeighInTimestamp?: Date = undefined;

  @ApiProperty({ type: Number })
  returnWeighOutKg: number = undefined;

  @ApiPropertyOptional({ type: String })
  returnWeighOutRemark?: string = undefined;

  @ApiPropertyOptional({ type: String })
  returnWeighOutOperatorName?: string = undefined;

  @ApiPropertyOptional({ type: Date })
  returnWeighOutTimestamp?: Date = undefined;

  @ApiPropertyOptional({ type: String })
  currentSeal1?: string = undefined;

  @ApiPropertyOptional({ type: String })
  currentSeal2?: string = undefined;

  @ApiPropertyOptional({ type: String })
  currentSeal3?: string = undefined;

  @ApiPropertyOptional({ type: String })
  currentSeal4?: string = undefined;

  @ApiPropertyOptional({ type: String })
  loadedSeal1?: string = undefined;

  @ApiPropertyOptional({ type: String })
  loadedSeal2?: string = undefined;

  @ApiPropertyOptional({ type: String })
  loadedSeal3?: string = undefined;

  @ApiPropertyOptional({ type: String })
  loadedSeal4?: string = undefined;

  @ApiPropertyOptional({ type: String })
  loadingRemark?: string = undefined;

  @ApiPropertyOptional({ type: String })
  loadingOperatorName?: string = undefined;

  @ApiPropertyOptional({ type: Date })
  loadingTimestamp?: Date = undefined;

  @ApiPropertyOptional({ type: String })
  unloadedSeal1?: string = undefined;

  @ApiPropertyOptional({ type: String })
  unloadedSeal2?: string = undefined;

  @ApiPropertyOptional({ type: String })
  unloadedSeal3?: string = undefined;

  @ApiPropertyOptional({ type: String })
  unloadedSeal4?: string = undefined;

  @ApiPropertyOptional({ type: String })
  unloadingRemark?: string = undefined;

  @ApiPropertyOptional({ type: String })
  unloadingOperatorName?: string = undefined;

  @ApiPropertyOptional({ type: Date })
  unloadingTimestamp?: Date = undefined;

  @ApiPropertyOptional({ type: String })
  returnUnloadedSeal1?: string = undefined;

  @ApiPropertyOptional({ type: String })
  returnUnloadedSeal2?: string = undefined;

  @ApiPropertyOptional({ type: String })
  returnUnloadedSeal3?: string = undefined;

  @ApiPropertyOptional({ type: String })
  returnUnloadedSeal4?: string = undefined;

  @ApiPropertyOptional({ type: String })
  returnUnloadingRemark?: string = undefined;

  @ApiPropertyOptional({ type: String })
  returnUnloadingOperatorName?: string = undefined;

  @ApiPropertyOptional({ type: Date })
  returnUnloadingTimestamp?: Date = undefined;

  @ApiPropertyOptional({ type: Object })
  jsonData?: object = undefined;

  @ApiProperty({ type: Boolean })
  isDeleted: boolean = undefined;

  @ApiProperty({ type: String })
  userCreated: string = undefined;

  @ApiProperty({ type: String })
  userModified: string = undefined;

  @ApiProperty({ type: Date })
  dtCreated: Date = undefined;

  @ApiProperty({ type: Date })
  dtModified: Date = undefined;
}
