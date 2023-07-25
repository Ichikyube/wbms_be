
import {CustomerTypeEntity} from './customerType.entity'
import {CustomerGroupEntity} from './customerGroup.entity'
import {CityEntity} from './city.entity'


export class CustomerEntity {
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
customerType?: CustomerTypeEntity ;
customerGroup?: CustomerGroupEntity ;
city?: CityEntity ;
}
