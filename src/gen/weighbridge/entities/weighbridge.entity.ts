
import {Site} from '../../site/entities/site.entity'


export class Weighbridge {
  id: string ;
siteId: string ;
code: string ;
name: string ;
isDeleted: boolean ;
userCreated: string  | null;
userModified: string  | null;
dtCreated: Date ;
dtModified: Date  | null;
site?: Site ;
}
