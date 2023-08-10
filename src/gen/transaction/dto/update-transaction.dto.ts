
import {Prisma} from '@prisma/client'




export class UpdateTransactionDto {
  bonTripNo?: string;
deliveryOrderId?: string;
deliveryOrderNo?: string;
deliveryDate?: Date;
productCode?: string;
productName?: string;
rspoUniqueNumber?: string;
isccUniqueNumber?: string;
transporterCompanyCode?: string;
transporterCompanyName?: string;
transporterCompanyShortName?: string;
driverNik?: string;
driverName?: string;
driverLicenseNo?: string;
transportVehicleId?: string;
transportVehiclePlateNo?: string;
transportVehicleProductCode?: string;
transportVehicleProductName?: string;
transportVehicleSccModel?: number;
originSiteCode?: string;
originSiteName?: string;
originSourceStorageTankCode?: string;
originSourceStorageTankName?: string;
destinationSiteCode?: string;
destinationSiteName?: string;
destinationSinkStorageTankCode?: string;
destinationSinkStorageTankName?: string;
originWeighInRemark?: string;
originWeighInOperatorName?: string;
originWeighInTimestamp?: Date;
originWeighOutRemark?: string;
originWeighOutOperatorName?: string;
originWeighOutTimestamp?: Date;
destinationWeighInRemark?: string;
destinationWeighInOperatorName?: string;
destinationWeighInTimestamp?: Date;
destinationWeighOutRemark?: string;
destinationWeighOutOperatorName?: string;
destinationWeighOutTimestamp?: Date;
returnWeighInRemark?: string;
returnWeighInOperatorName?: string;
returnWeighInTimestamp?: Date;
returnWeighOutRemark?: string;
returnWeighOutOperatorName?: string;
returnWeighOutTimestamp?: Date;
currentSeal1?: string;
currentSeal2?: string;
currentSeal3?: string;
currentSeal4?: string;
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
qtyTbs?: number;
qtyTbsDikirim?: number;
qtyTbsDikembalikan?: number;
jsonData?: Prisma.InputJsonValue;
userCreated?: string;
userModified?: string;
}
