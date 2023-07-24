
import {Site} from './site.entity'
import {TransportVehicle} from './transportVehicle.entity'
import {Mill} from './mill.entity'
import {Driver} from './driver.entity'
import {Transaction} from './transaction.entity'
import {StorageTank} from './storageTank.entity'


export class Company {
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
sites?: Site[] ;
transportVehicles?: TransportVehicle[] ;
mills?: Mill[] ;
Driver?: Driver[] ;
Transaction?: Transaction[] ;
StorageTank?: StorageTank[] ;
}
