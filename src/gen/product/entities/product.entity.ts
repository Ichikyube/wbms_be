
import {StorageTank} from '../../storageTank/entities/storageTank.entity'
import {Transaction} from '../../transaction/entities/transaction.entity'
import {TransportVehicle} from '../../transportVehicle/entities/transportVehicle.entity'


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
userCreated: string  | null;
userModified: string  | null;
dtCreated: Date ;
dtModified: Date  | null;
storageTanks?: StorageTank[] ;
transactions?: Transaction[] ;
transportVehicles?: TransportVehicle[] ;
}
