
import {Province} from '../../province/entities/province.entity'
import {Site} from '../../site/entities/site.entity'
import {Customer} from '../../customer/entities/customer.entity'


export class City {
  id: string ;
provinceId: string ;
name: string ;
isDeleted: boolean ;
userCreated: string  | null;
userModified: string  | null;
dtCreated: Date ;
dtModified: Date  | null;
province?: Province ;
sites?: Site[] ;
customers?: Customer[] ;
}
