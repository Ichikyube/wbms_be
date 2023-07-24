
import {City} from './city.entity'


export class Province {
  id: string ;
name: string ;
isDeleted: boolean ;
userCreated: string ;
userModified: string ;
dtCreated: Date ;
dtModified: Date ;
cities?: City[] ;
}
