
import {SiteEntity} from './site.entity'


export class WeighbridgeEntity {
  id: string ;
siteId: string ;
code: string ;
name: string ;
isDeleted: boolean ;
userCreated: string ;
userModified: string ;
dtCreated: Date ;
dtModified: Date ;
site?: SiteEntity ;
}
