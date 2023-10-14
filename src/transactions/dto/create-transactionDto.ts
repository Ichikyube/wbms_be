import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { QrcodeDto } from 'src/semai/dto/qrcode.dto';

export class CreateTransactionDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  typeTransaction: number = 1;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  typeSite: number = 1;

  @ApiPropertyOptional({ type: String })
  afdeling?: string = undefined;

  @ApiPropertyOptional({ type: String })
  blok?: string = undefined;

  @ApiPropertyOptional({ type: String })
  sptbs?: string = undefined;

  @ApiPropertyOptional({ type: String })
  codePlant?: string = undefined;

  @ApiPropertyOptional({ type: Boolean })
  checkGrade?: boolean = undefined;

  @ApiPropertyOptional({ type: String })
  spbNo?: string = undefined;

  @ApiPropertyOptional({ type: Number })
  yearPlant?: number = undefined;

  @ApiPropertyOptional({ type: String })
  indikator?: string = undefined;

  @ApiPropertyOptional({ type: String })
  code?: string = undefined;

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

  @ApiPropertyOptional({ type: String })
  customerId?: string = undefined;

  @ApiPropertyOptional({ type: String })
  customerCode?: string = undefined;

  @ApiPropertyOptional({ type: String })
  customerName?: string = undefined;

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

  @ApiPropertyOptional({ type: Number })
  transportVehicleSccModel?: number = undefined;

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

  @ApiPropertyOptional({ type: Number })
  potngnBM?: number = undefined;

  @ApiPropertyOptional({ type: Number })
  potngnBLM?: number = undefined;

  @ApiPropertyOptional({ type: Number })
  potngnTK?: number = undefined;

  @ApiPropertyOptional({ type: Number })
  potngnTP?: number = undefined;

  @ApiPropertyOptional({ type: Number })
  potngnSampah?: number = undefined;

  @ApiPropertyOptional({ type: Number })
  potngnAir?: number = undefined;

  @ApiPropertyOptional({ type: Number })
  potngnParteno?: number = undefined;

  @ApiPropertyOptional({ type: Number })
  potngnBrondolan?: number = undefined;

  @ApiPropertyOptional({ type: Number })
  potngnBKM?: number = undefined;

  @ApiPropertyOptional({ type: Number })
  potngnBusuk?: number = undefined;

  @ApiPropertyOptional({ type: Number })
  potngnAbnormal?: number = undefined;

  @ApiPropertyOptional({ type: Number })
  potngnBuahKecil?: number = undefined;

  @ApiPropertyOptional({ type: Number })
  potngnDimknHama?: number = undefined;

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

  @ApiPropertyOptional({ type: Number })
  qtyTbs?: number = undefined;

  @ApiPropertyOptional({ type: Number })
  qtyTbsDikirim?: number = undefined;

  @ApiPropertyOptional({ type: Number })
  qtyTbsDikembalikan?: number = undefined;

  @ApiPropertyOptional({ type: Object })
  jsonData?: object = undefined;

  @ApiProperty({ type: Boolean })
  isDeleted: boolean = undefined;

  @ApiPropertyOptional({ type: String })
  userCreated?: string = undefined;

  @ApiPropertyOptional({ type: String })
  userModified?: string = undefined;

  @ApiProperty({ type: Date })
  dtCreated: Date = undefined;

  @ApiPropertyOptional({ type: Date })
  dtModified?: Date = undefined;
}
