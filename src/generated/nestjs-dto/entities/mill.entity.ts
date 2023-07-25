
import {SiteEntity} from './site.entity'
import {CompanyEntity} from './company.entity'


export class MillEntity {
  id: string ;
siteId: string ;
companyId: string ;
code: string ;
name: string ;
isDeleted: boolean ;
userCreated: string ;
userModified: string ;
dtCreated: Date ;
dtModified: Date ;
site?: SiteEntity ;
company?: CompanyEntity ;
}
