
import {CompanyEntity} from './company.entity'
import {CityEntity} from './city.entity'
import {StorageTankEntity} from './storageTank.entity'
import {WeighbridgeEntity} from './weighbridge.entity'
import {MillEntity} from './mill.entity'
import {ConfigEntity} from './config.entity'
import {TransactionEntity} from './transaction.entity'


export class SiteEntity {
  id: string ;
refType: number ;
refId: string  | null;
sourceSiteId: string  | null;
sourceSiteRefId: string  | null;
sourceSiteName: string  | null;
companyId: string  | null;
companyRefId: string  | null;
companyName: string ;
cityId: string  | null;
code: string ;
codeSap: string  | null;
name: string ;
shortName: string  | null;
description: string  | null;
latitude: number  | null;
longitude: number  | null;
solarCalibration: number  | null;
isMill: boolean ;
isDeleted: boolean ;
userCreated: string ;
userModified: string ;
dtCreated: Date ;
dtModified: Date ;
sourceSite?: SiteEntity  | null;
company?: CompanyEntity  | null;
city?: CityEntity  | null;
storageTanks?: StorageTankEntity[] ;
weighbridges?: WeighbridgeEntity[] ;
mills?: MillEntity[] ;
config?: ConfigEntity[] ;
destinationSites?: SiteEntity[] ;
originSiteTransactions?: TransactionEntity[] ;
destinationSiteTransactions?: TransactionEntity[] ;
}
