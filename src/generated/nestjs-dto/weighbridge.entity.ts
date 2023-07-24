
import {Site} from './site.entity'


export class Weighbridge {
  id: string ;
siteId: string ;
code: string ;
name: string ;
isDeleted: boolean ;
userCreated: string ;
userModified: string ;
dtCreated: Date ;
dtModified: Date ;
site?: Site ;
}
