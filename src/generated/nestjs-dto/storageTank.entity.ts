
import {Site} from './site.entity'
import {Company} from './company.entity'
import {Product} from './product.entity'
import {Transaction} from './transaction.entity'


export class StorageTank {
  id: string ;
refType: number ;
refId: string  | null;
siteId: string  | null;
siteRefId: string  | null;
siteName: string ;
stockOwnerId: string  | null;
stockOwnerRefId: string  | null;
stockOwnerName: string  | null;
productId: string  | null;
productRefId: string  | null;
productName: string  | null;
code: string ;
codeSap: string ;
name: string ;
shortName: string  | null;
description: string  | null;
capacity: number  | null;
height: number  | null;
sccModel: number ;
isDeleted: boolean ;
userCreated: string ;
userModified: string ;
dtCreated: Date ;
dtModified: Date ;
site?: Site  | null;
stockOwner?: Company  | null;
product?: Product  | null;
originSourceStorageTankTransactions?: Transaction[] ;
destinationSinkStorageTankTransactions?: Transaction[] ;
}
