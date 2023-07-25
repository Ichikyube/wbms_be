
import {SiteEntity} from './site.entity'
import {CompanyEntity} from './company.entity'
import {ProductEntity} from './product.entity'
import {TransactionEntity} from './transaction.entity'


export class StorageTankEntity {
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
site?: SiteEntity  | null;
stockOwner?: CompanyEntity  | null;
product?: ProductEntity  | null;
originSourceStorageTankTransactions?: TransactionEntity[] ;
destinationSinkStorageTankTransactions?: TransactionEntity[] ;
}
