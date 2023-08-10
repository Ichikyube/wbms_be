
import {Company} from '../../company/entities/company.entity'
import {City} from '../../city/entities/city.entity'
import {StorageTank} from '../../storageTank/entities/storageTank.entity'
import {Weighbridge} from '../../weighbridge/entities/weighbridge.entity'
import {Mill} from '../../mill/entities/mill.entity'
import {Transaction} from '../../transaction/entities/transaction.entity'


export class Site {
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
userCreated: string  | null;
userModified: string  | null;
dtCreated: Date ;
dtModified: Date  | null;
sourceSite?: Site  | null;
company?: Company  | null;
city?: City  | null;
storageTanks?: StorageTank[] ;
weighbridges?: Weighbridge[] ;
mills?: Mill[] ;
destinationSites?: Site[] ;
originSiteTransactions?: Transaction[] ;
destinationSiteTransactions?: Transaction[] ;
}
