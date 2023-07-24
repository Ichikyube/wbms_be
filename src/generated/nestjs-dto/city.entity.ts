
import {Province} from './province.entity'
import {Site} from './site.entity'
import {Customer} from './customer.entity'


export class City {
  id: string ;
provinceId: string ;
name: string ;
isDeleted: boolean ;
userCreated: string ;
userModified: string ;
dtCreated: Date ;
dtModified: Date ;
province?: Province ;
sites?: Site[] ;
customers?: Customer[] ;
}
