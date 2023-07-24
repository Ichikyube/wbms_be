
import {Company} from './company.entity'
import {City} from './city.entity'
import {StorageTank} from './storageTank.entity'
import {Weighbridge} from './weighbridge.entity'
import {Mill} from './mill.entity'
import {Config} from './config.entity'
import {Transaction} from './transaction.entity'


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
userCreated: string ;
userModified: string ;
dtCreated: Date ;
dtModified: Date ;
sourceSite?: Site  | null;
company?: Company  | null;
city?: City  | null;
storageTanks?: StorageTank[] ;
weighbridges?: Weighbridge[] ;
mills?: Mill[] ;
config?: Config[] ;
destinationSites?: Site[] ;
originSiteTransactions?: Transaction[] ;
destinationSiteTransactions?: Transaction[] ;
}
