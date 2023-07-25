
import {StorageTankEntity} from './storageTank.entity'
import {TransactionEntity} from './transaction.entity'
import {TransportVehicleEntity} from './transportVehicle.entity'


export class ProductEntity {
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
storageTanks?: StorageTankEntity[] ;
transactions?: TransactionEntity[] ;
transportVehicles?: TransportVehicleEntity[] ;
}
