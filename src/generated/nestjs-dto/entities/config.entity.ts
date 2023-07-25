
import {SiteEntity} from './site.entity'


export class ConfigEntity {
  id: string ;
minWeight: number ;
imageFolder: string ;
fileFolder: string ;
millHeadCode: string ;
millHeadName: string ;
approval1: string ;
approval2: string ;
notes: string ;
isDeleted: boolean ;
userCreated: string ;
userModified: string ;
dtCreated: Date ;
dtModified: Date ;
site?: SiteEntity ;
}
