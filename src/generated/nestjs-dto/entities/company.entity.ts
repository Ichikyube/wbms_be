
import {SiteEntity} from './site.entity'
import {TransportVehicleEntity} from './transportVehicle.entity'
import {MillEntity} from './mill.entity'
import {DriverEntity} from './driver.entity'
import {TransactionEntity} from './transaction.entity'
import {StorageTankEntity} from './storageTank.entity'


export class CompanyEntity {
  id: string ;
refType: number ;
refId: string  | null;
code: string ;
codeSap: string  | null;
name: string ;
shortName: string  | null;
address: string  | null;
addressExt: string  | null;
postalCode: string  | null;
country: string  | null;
province: string  | null;
city: string  | null;
phone: string  | null;
url: string  | null;
contactName: string  | null;
contactEmail: string  | null;
contactPhone: string  | null;
isMillOperator: boolean ;
isTransporter: boolean ;
isSiteOperator: boolean ;
isEstate: boolean ;
isDeleted: boolean ;
userCreated: string ;
userModified: string ;
dtCreated: Date ;
dtModified: Date ;
sites?: SiteEntity[] ;
transportVehicles?: TransportVehicleEntity[] ;
mills?: MillEntity[] ;
Driver?: DriverEntity[] ;
Transaction?: TransactionEntity[] ;
StorageTank?: StorageTankEntity[] ;
}
