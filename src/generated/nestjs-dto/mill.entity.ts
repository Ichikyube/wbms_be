
import {Site} from './site.entity'
import {Company} from './company.entity'


export class Mill {
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
site?: Site ;
company?: Company ;
}
