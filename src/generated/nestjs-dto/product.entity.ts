
import {StorageTank} from './storageTank.entity'
import {Transaction} from './transaction.entity'
import {TransportVehicle} from './transportVehicle.entity'


export class Product {
  id: string ;
refType: number ;
refId: string  | null;
productGroupName: string  | null;
code: string ;
codeSap: string  | null;
name: string ;
shortName: string  | null;
description: string  | null;
certification: string  | null;
isDeleted: boolean ;
userCreated: string ;
userModified: string ;
dtCreated: Date ;
dtModified: Date ;
storageTanks?: StorageTank[] ;
transactions?: Transaction[] ;
transportVehicles?: TransportVehicle[] ;
}
