
import {Site} from '../../site/entities/site.entity'
import {TransportVehicle} from '../../transportVehicle/entities/transportVehicle.entity'
import {Mill} from '../../mill/entities/mill.entity'
import {Driver} from '../../driver/entities/driver.entity'
import {Transaction} from '../../transaction/entities/transaction.entity'
import {StorageTank} from '../../storageTank/entities/storageTank.entity'


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
userCreated: string  | null;
userModified: string  | null;
dtCreated: Date ;
dtModified: Date  | null;
sites?: Site[] ;
transportVehicles?: TransportVehicle[] ;
mills?: Mill[] ;
Driver?: Driver[] ;
Transaction?: Transaction[] ;
StorageTank?: StorageTank[] ;
}
