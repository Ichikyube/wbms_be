import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Prisma, Transaction } from '@prisma/client';
import { IsString, IsNotEmpty } from 'class-validator';
import { QrcodeDto } from 'src/semai/dto/qrcode.dto';
import { StorageTankEntity } from './storageTank.entity';
import { SiteEntity } from './site.entity';
import { DriverEntity } from './driver.entity';
import { CompanyEntity } from './company.entity';
import { ProductEntity } from './product.entity';
import { CustomerEntity } from './customer.entity';
import { TransportVehicleEntity } from './transport-vehicle.entity';

export class TransactionEntity {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: Number })
  typeSite: number = 1;

  @ApiProperty({ type: Number })
  typeTransaction: number = 1;

  @ApiProperty() sptbs?: string;
  @ApiPropertyOptional({ type: String })
  bonTripNo?: string;

  @ApiProperty({ type: Number })
  vehicleStatus: number;

  @ApiProperty({ type: Number })
  deliveryStatus: number;

  @ApiProperty({ type: Number })
  progressStatus: number;

  @ApiPropertyOptional({ type: String })
  deliveryOrderId?: string;

  @ApiPropertyOptional({ type: String })
  deliveryOrderNo?: string;

  @ApiPropertyOptional({ type: Date })
  deliveryDate?: Date;

  @ApiPropertyOptional({ type: String })
  productId?: string;

  @ApiPropertyOptional({ type: String })
  productCode?: string;

  @ApiPropertyOptional({ type: String })
  productName?: string;

  @ApiProperty({ type: Number })
  rspoSccModel: number;

  @ApiPropertyOptional({ type: String })
  rspoUniqueNumber?: string;

  @ApiProperty({ type: Number })
  isccSccModel: number;

  @ApiPropertyOptional({ type: String })
  isccUniqueNumber?: string;

  @ApiProperty({ type: Number })
  isccGhgValue: number;

  @ApiProperty({ type: Number })
  isccEeeValue: number;

  @ApiPropertyOptional({ type: String })
  transporterId?: string;

  @ApiPropertyOptional({ type: String })
  transporterCompanyCode?: string;

  @ApiPropertyOptional({ type: String })
  transporterCompanyName?: string;

  @ApiPropertyOptional({ type: String })
  transporterCompanyShortName?: string;

  @ApiPropertyOptional({ type: String })
  driverId?: string;

  @ApiPropertyOptional({ type: String })
  driverNik?: string;

  @ApiPropertyOptional({ type: String })
  driverName?: string;

  @ApiPropertyOptional({ type: String })
  driverLicenseNo?: string;

  @ApiPropertyOptional({ type: String })
  transportVehicleId?: string;

  @ApiPropertyOptional({ type: String })
  transportVehiclePlateNo?: string;

  @ApiPropertyOptional({ type: String })
  transportVehicleProductCode?: string;

  @ApiPropertyOptional({ type: String })
  transportVehicleProductName?: string;

  @ApiPropertyOptional({ type: Number })
  transportVehicleSccModel?: number;

  @ApiPropertyOptional({ type: String })
  originSiteId?: string;

  @ApiPropertyOptional({ type: String })
  originSiteCode?: string;

  @ApiPropertyOptional({ type: String })
  originSiteName?: string;

  @ApiPropertyOptional({ type: String })
  originSourceStorageTankId?: string;

  @ApiPropertyOptional({ type: String })
  originSourceStorageTankCode?: string;

  @ApiPropertyOptional({ type: String })
  originSourceStorageTankName?: string;

  @ApiPropertyOptional({ type: String })
  destinationSiteId?: string;

  @ApiPropertyOptional({ type: String })
  destinationSiteCode?: string;

  @ApiPropertyOptional({ type: String })
  destinationSiteName?: string;

  @ApiPropertyOptional({ type: String })
  destinationSinkStorageTankId?: string;

  @ApiPropertyOptional({ type: String })
  destinationSinkStorageTankCode?: string;

  @ApiPropertyOptional({ type: String })
  destinationSinkStorageTankName?: string;

  @ApiProperty({ type: Number })
  originFfaPercentage: number;

  @ApiProperty({ type: Number })
  originMoistPercentage: number;

  @ApiProperty({ type: Number })
  originDirtPercentage: number;

  @ApiProperty({ type: Number })
  originWeighInKg: number;

  @ApiPropertyOptional({ type: String })
  originWeighInRemark?: string;

  @ApiPropertyOptional({ type: String })
  originWeighInOperatorName?: string;

  @ApiPropertyOptional({ type: Date })
  originWeighInTimestamp?: Date;

  @ApiProperty({ type: Number })
  originWeighOutKg: number;

  @ApiPropertyOptional({ type: String })
  originWeighOutRemark?: string;

  @ApiPropertyOptional({ type: String })
  originWeighOutOperatorName?: string;

  @ApiPropertyOptional({ type: Date })
  originWeighOutTimestamp?: Date;

  @ApiProperty({ type: Number })
  potonganWajib: number;

  @ApiProperty({ type: Number })
  potonganLain: number;

  @ApiProperty({ type: Number })
  destinationWeighInKg: number;

  @ApiPropertyOptional({ type: String })
  destinationWeighInRemark?: string;

  @ApiPropertyOptional({ type: String })
  destinationWeighInOperatorName?: string;

  @ApiPropertyOptional({ type: Date })
  destinationWeighInTimestamp?: Date;

  @ApiProperty({ type: Number })
  destinationWeighOutKg: number;

  @ApiPropertyOptional({ type: String })
  destinationWeighOutRemark?: string;

  @ApiPropertyOptional({ type: String })
  destinationWeighOutOperatorName?: string;

  @ApiPropertyOptional({ type: Date })
  destinationWeighOutTimestamp?: Date;

  @ApiProperty({ type: Number })
  returnWeighInKg: number;

  @ApiPropertyOptional({ type: String })
  returnWeighInRemark?: string;

  @ApiPropertyOptional({ type: String })
  returnWeighInOperatorName?: string;

  @ApiPropertyOptional({ type: Date })
  returnWeighInTimestamp?: Date;

  @ApiProperty({ type: Number })
  returnWeighOutKg: number;

  @ApiPropertyOptional({ type: String })
  returnWeighOutRemark?: string;

  @ApiPropertyOptional({ type: String })
  returnWeighOutOperatorName?: string;

  @ApiPropertyOptional({ type: Date })
  returnWeighOutTimestamp?: Date;

  @ApiPropertyOptional({ type: String })
  currentSeal1?: string;

  @ApiPropertyOptional({ type: String })
  currentSeal2?: string;

  @ApiPropertyOptional({ type: String })
  currentSeal3?: string;

  @ApiPropertyOptional({ type: String })
  currentSeal4?: string;

  @ApiPropertyOptional({ type: String })
  loadedSeal1?: string;

  @ApiPropertyOptional({ type: String })
  loadedSeal2?: string;

  @ApiPropertyOptional({ type: String })
  loadedSeal3?: string;

  @ApiPropertyOptional({ type: String })
  loadedSeal4?: string;

  @ApiPropertyOptional({ type: String })
  loadingRemark?: string;

  @ApiPropertyOptional({ type: String })
  loadingOperatorName?: string;

  @ApiPropertyOptional({ type: Date })
  loadingTimestamp?: Date;

  @ApiPropertyOptional({ type: String })
  unloadedSeal1?: string;

  @ApiPropertyOptional({ type: String })
  unloadedSeal2?: string;

  @ApiPropertyOptional({ type: String })
  unloadedSeal3?: string;

  @ApiPropertyOptional({ type: String })
  unloadedSeal4?: string;

  @ApiPropertyOptional({ type: String })
  unloadingRemark?: string;

  @ApiPropertyOptional({ type: String })
  unloadingOperatorName?: string;

  @ApiPropertyOptional({ type: Date })
  unloadingTimestamp?: Date;

  @ApiPropertyOptional({ type: String })
  returnUnloadedSeal1?: string;

  @ApiPropertyOptional({ type: String })
  returnUnloadedSeal2?: string;

  @ApiPropertyOptional({ type: String })
  returnUnloadedSeal3?: string;

  @ApiPropertyOptional({ type: String })
  returnUnloadedSeal4?: string;

  @ApiPropertyOptional({ type: String })
  returnUnloadingRemark?: string;

  @ApiPropertyOptional({ type: String })
  returnUnloadingOperatorName?: string;

  @ApiPropertyOptional({ type: Date })
  returnUnloadingTimestamp?: Date;

  @ApiPropertyOptional({ type: Object })
  jsonData?: object;

  @ApiProperty({ type: Boolean })
  isDeleted: boolean;

  @ApiProperty({ type: String })
  userCreated: string;

  @ApiProperty({ type: String })
  userModified: string;

  @ApiProperty({ type: Date })
  dtCreated: Date;

  @ApiProperty({ type: Date })
  dtModified: Date;
  qtyTbs: number | null;
  qtyTbsDikirim: number | null;
  qtyTbsDikembalikan: number | null;

  @ApiPropertyOptional({ type: () => CustomerEntity })
  customer?: CustomerEntity | null;

  @ApiPropertyOptional({ type: () => ProductEntity })
  product?: ProductEntity;

  @ApiPropertyOptional({ type: () => CompanyEntity })
  transporter?: CompanyEntity;

  @ApiPropertyOptional({ type: () => DriverEntity })
  driver?: DriverEntity;

  @ApiPropertyOptional({ type: () => SiteEntity })
  originSite?: SiteEntity;

  @ApiPropertyOptional({ type: () => SiteEntity })
  destinationSite?: SiteEntity;

  @ApiPropertyOptional({ type: () => StorageTankEntity })
  originSourceStorageTank?: StorageTankEntity;

  @ApiPropertyOptional({ type: () => StorageTankEntity })
  destinationSinkStorageTank?: StorageTankEntity;
  @ApiPropertyOptional({ type: () => TransportVehicleEntity })
  transportVehicle?: TransportVehicleEntity;
}
