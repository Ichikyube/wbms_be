
import {CityEntity} from './city.entity'


export class ProvinceEntity {
  id: string ;
name: string ;
isDeleted: boolean ;
userCreated: string ;
userModified: string ;
dtCreated: Date ;
dtModified: Date ;
cities?: CityEntity[] ;
}
