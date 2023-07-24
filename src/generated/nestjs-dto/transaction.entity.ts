
import {Prisma} from '@prisma/client'
import {Product} from './product.entity'
import {Company} from './company.entity'
import {Driver} from './driver.entity'
import {Site} from './site.entity'
import {StorageTank} from './storageTank.entity'


export class Transaction {
  id: string ;
tType: number ;
bonTripNo: string  | null;
vehicleStatus: number ;
deliveryStatus: number ;
progressStatus: number ;
deliveryOrderId: string  | null;
deliveryOrderNo: string  | null;
deliveryDate: Date  | null;
productId: string  | null;
productCode: string  | null;
productName: string  | null;
rspoSccModel: number ;
rspoUniqueNumber: string  | null;
isccSccModel: number ;
isccUniqueNumber: string  | null;
isccGhgValue: number ;
isccEeeValue: number ;
transporterId: string  | null;
transporterCompanyCode: string  | null;
transporterCompanyName: string  | null;
transporterCompanyShortName: string  | null;
driverId: string  | null;
driverNik: string  | null;
driverName: string  | null;
driverLicenseNo: string  | null;
transportVehicleId: string  | null;
transportVehiclePlateNo: string  | null;
transportVehicleProductCode: string  | null;
transportVehicleProductName: string  | null;
transportVehicleSccModel: number ;
originSiteId: string  | null;
originSiteCode: string  | null;
originSiteName: string  | null;
originSourceStorageTankId: string  | null;
originSourceStorageTankCode: string  | null;
originSourceStorageTankName: string  | null;
destinationSiteId: string  | null;
destinationSiteCode: string  | null;
destinationSiteName: string  | null;
destinationSinkStorageTankId: string  | null;
destinationSinkStorageTankCode: string  | null;
destinationSinkStorageTankName: string  | null;
originFfaPercentage: number ;
originMoistPercentage: number ;
originDirtPercentage: number ;
originWeighInKg: number ;
originWeighInRemark: string  | null;
originWeighInOperatorName: string  | null;
originWeighInTimestamp: Date  | null;
originWeighOutKg: number ;
originWeighOutRemark: string  | null;
originWeighOutOperatorName: string  | null;
originWeighOutTimestamp: Date  | null;
potonganWajib: number ;
potonganLain: number ;
destinationWeighInKg: number ;
destinationWeighInRemark: string  | null;
destinationWeighInOperatorName: string  | null;
destinationWeighInTimestamp: Date  | null;
destinationWeighOutKg: number ;
destinationWeighOutRemark: string  | null;
destinationWeighOutOperatorName: string  | null;
destinationWeighOutTimestamp: Date  | null;
returnWeighInKg: number ;
returnWeighInRemark: string  | null;
returnWeighInOperatorName: string  | null;
returnWeighInTimestamp: Date  | null;
returnWeighOutKg: number ;
returnWeighOutRemark: string  | null;
returnWeighOutOperatorName: string  | null;
returnWeighOutTimestamp: Date  | null;
currentSeal1: string  | null;
currentSeal2: string  | null;
currentSeal3: string  | null;
currentSeal4: string  | null;
loadedSeal1: string  | null;
loadedSeal2: string  | null;
loadedSeal3: string  | null;
loadedSeal4: string  | null;
loadingRemark: string  | null;
loadingOperatorName: string  | null;
loadingTimestamp: Date  | null;
unloadedSeal1: string  | null;
unloadedSeal2: string  | null;
unloadedSeal3: string  | null;
unloadedSeal4: string  | null;
unloadingRemark: string  | null;
unloadingOperatorName: string  | null;
unloadingTimestamp: Date  | null;
returnUnloadedSeal1: string  | null;
returnUnloadedSeal2: string  | null;
returnUnloadedSeal3: string  | null;
returnUnloadedSeal4: string  | null;
returnUnloadingRemark: string  | null;
returnUnloadingOperatorName: string  | null;
returnUnloadingTimestamp: Date  | null;
jsonData: Prisma.JsonValue  | null;
isDeleted: boolean ;
userCreated: string ;
userModified: string ;
dtCreated: Date ;
dtModified: Date ;
product?: Product  | null;
transporter?: Company  | null;
driver?: Driver  | null;
originSite?: Site  | null;
destinationSite?: Site  | null;
originSourceStorageTank?: StorageTank  | null;
destinationSinkStorageTank?: StorageTank  | null;
}
