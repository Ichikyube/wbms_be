
import {ProvinceEntity} from './province.entity'
import {SiteEntity} from './site.entity'
import {CustomerEntity} from './customer.entity'


export class CityEntity {
  id: string ;
provinceId: string ;
name: string ;
isDeleted: boolean ;
userCreated: string ;
userModified: string ;
dtCreated: Date ;
dtModified: Date ;
province?: ProvinceEntity ;
sites?: SiteEntity[] ;
customers?: CustomerEntity[] ;
}
