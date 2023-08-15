import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { QrcodeDto } from 'src/semai/dto/qrcode.dt';

export class CreateTransactionDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  tType: number;

  @ApiProperty() bonTripNo?: string;
  @ApiProperty() vehicleStatus: number;
  @ApiProperty() deliveryStatus: number;
  @ApiProperty() progressStatus: number;

  @ApiProperty() deliveryOrderId?: string;
  @ApiProperty() deliveryOrderNo?: string;
  @ApiProperty() deliveryDate?: Date;

  @ApiProperty() productId?: string;
  @ApiProperty() productCode?: string;
  @ApiProperty() productName?: string;
  @ApiProperty() customerId?: string;
  @ApiProperty() customername?: string;
  @ApiProperty() customerCode?: string;
  @ApiProperty() transporterId?: string;
  @ApiProperty() transporterCompanyCode?: string;
  @ApiProperty() transporterCompanyName?: string;
  @ApiProperty() transporterCompanyShortName?: string;

  @ApiProperty() driverId?: string;
  @ApiProperty() driverNik?: string;
  @ApiProperty() driverName?: string;
  @ApiProperty() driverLicenseNo?: string;

  @ApiProperty() transportVehicleId?: string;
  @ApiProperty() transportVehiclePlateNo?: string;
  @ApiProperty() transportVehicleProductCode?: string;
  @ApiProperty() transportVehicleProductName?: string;
  @ApiProperty() transportVehicleSccModel?: number;

  @ApiProperty() originWeighInKg: number;
  @ApiProperty() originWeighInRemark?: string;
  @ApiProperty() originWeighInOperatorName?: string;
  @ApiProperty() originWeighInTimestamp?: Date;

  @ApiProperty() originWeighOutKg: number;
  @ApiProperty() originWeighOutRemark?: string;
  @ApiProperty() originWeighOutOperatorName?: string;
  @ApiProperty() originWeighOutTimestamp?: Date;

  @ApiProperty() potonganWajib: number;
  @ApiProperty() potonganLain: number;

  @ApiProperty() returnWeighInKg: number;
  @ApiProperty() returnWeighInRemark?: string;
  @ApiProperty() returnWeighInOperatorName?: string;
  @ApiProperty() returnWeighInTimestamp?: Date;

  @ApiProperty() returnWeighOutKg: number;
  @ApiProperty() returnWeighOutRemark?: string;
  @ApiProperty() returnWeighOutOperatorName?: string;
  @ApiProperty() returnWeighOutTimestamp?: Date;

  @ApiProperty() currentSeal1?: string;
  @ApiProperty() currentSeal2?: string;
  @ApiProperty() currentSeal3?: string;
  @ApiProperty() currentSeal4?: string;

  @ApiProperty() rspoUniqueNumber?: string;
  @ApiProperty() isccUniqueNumber?: string;

  @ApiProperty() originSiteCode?: string;
  @ApiProperty() originSiteName?: string;
  @ApiProperty() originSourceStorageTankCode?: string;
  @ApiProperty() originSourceStorageTankName?: string;
  @ApiProperty() destinationSiteCode?: string;
  @ApiProperty() destinationSiteName?: string;
  @ApiProperty() destinationSinkStorageTankCode?: string;
  @ApiProperty() destinationSinkStorageTankName?: string;

  @ApiProperty() destinationWeighInRemark?: string;
  @ApiProperty() destinationWeighInOperatorName?: string;
  @ApiProperty() destinationWeighInTimestamp?: Date;
  @ApiProperty() destinationWeighOutRemark?: string;
  @ApiProperty() destinationWeighOutOperatorName?: string;
  @ApiProperty() destinationWeighOutTimestamp?: Date;

  @ApiProperty() loadedSeal1?: string;
  @ApiProperty() loadedSeal2?: string;
  @ApiProperty() loadedSeal3?: string;
  @ApiProperty() loadedSeal4?: string;
  @ApiProperty() loadingRemark?: string;
  @ApiProperty() loadingOperatorName?: string;
  @ApiProperty() loadingTimestamp?: Date;
  @ApiProperty() unloadedSeal1?: string;
  @ApiProperty() unloadedSeal2?: string;
  @ApiProperty() unloadedSeal3?: string;
  @ApiProperty() unloadedSeal4?: string;
  @ApiProperty() unloadingRemark?: string;
  @ApiProperty() unloadingOperatorName?: string;
  @ApiProperty() unloadingTimestamp?: Date;
  @ApiProperty() returnUnloadedSeal1?: string;
  @ApiProperty() returnUnloadedSeal2?: string;
  @ApiProperty() returnUnloadedSeal3?: string;
  @ApiProperty() returnUnloadedSeal4?: string;
  @ApiProperty() returnUnloadingRemark?: string;
  @ApiProperty() returnUnloadingOperatorName?: string;
  @ApiProperty() returnUnloadingTimestamp?: Date;
  @ApiProperty() qtyTbs?: number;
  @ApiProperty() qtyTbsDikirim?: number;
  @ApiProperty()  qtyTbsDikembalikan?: number;
  // jsonData: QrcodeDto;
  @ApiProperty() rspoSccModel: number;
  @ApiProperty() isccSccModel: number;
  @ApiProperty() isccGhgValue: number;
  @ApiProperty() isccEeeValue: number;
  @ApiProperty() originSiteId?: string;
  @ApiProperty() destinationSiteId?: string;
  @ApiProperty() originFfaPercentage: number;
  @ApiProperty() originMoistPercentage: number;
  @ApiProperty() originDirtPercentage: number;
  @ApiProperty() destinationWeighInKg: number;
  @ApiProperty() destinationWeighOutKg: number;
}
