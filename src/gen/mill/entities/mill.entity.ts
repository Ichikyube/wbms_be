
import {Site} from '../../site/entities/site.entity'
import {Company} from '../../company/entities/company.entity'


export class Mill {
  id: string ;
siteId: string ;
companyId: string ;
code: string ;
name: string ;
isDeleted: boolean ;
userCreated: string  | null;
userModified: string  | null;
dtCreated: Date ;
dtModified: Date  | null;
site?: Site ;
company?: Company ;
}
