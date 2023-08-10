
import {City} from '../../city/entities/city.entity'


export class Province {
  id: string ;
name: string ;
isDeleted: boolean ;
userCreated: string  | null;
userModified: string  | null;
dtCreated: Date ;
dtModified: Date  | null;
cities?: City[] ;
}
