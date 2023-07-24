
import {CustomerType} from './customerType.entity'
import {CustomerGroup} from './customerGroup.entity'
import {City} from './city.entity'


export class Customer {
  id: string ;
customerTypeId: string ;
customerGroupId: string ;
cityId: string ;
code: string ;
codeSap: string  | null;
name: string ;
shortName: string  | null;
address: string  | null;
addressExt: string  | null;
postalCode: string  | null;
phone: string  | null;
url: string  | null;
contactName: string  | null;
contactEmail: string  | null;
contactPhone: string  | null;
sortasi: number  | null;
isDeleted: boolean ;
userCreated: string ;
userModified: string ;
dtCreated: Date ;
dtModified: Date ;
customerType?: CustomerType ;
customerGroup?: CustomerGroup ;
city?: City ;
}
