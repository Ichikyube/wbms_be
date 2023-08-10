
import {Site} from '../../site/entities/site.entity'
import {Company} from '../../company/entities/company.entity'
import {Product} from '../../product/entities/product.entity'
import {Transaction} from '../../transaction/entities/transaction.entity'


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
userCreated: string  | null;
userModified: string  | null;
dtCreated: Date ;
dtModified: Date  | null;
site?: Site  | null;
stockOwner?: Company  | null;
product?: Product  | null;
originSourceStorageTankTransactions?: Transaction[] ;
destinationSinkStorageTankTransactions?: Transaction[] ;
}
