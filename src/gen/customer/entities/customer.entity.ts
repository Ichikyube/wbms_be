
import {CustomerType} from '../../customerType/entities/customerType.entity'
import {CustomerGroup} from '../../customerGroup/entities/customerGroup.entity'
import {City} from '../../city/entities/city.entity'
import {Transaction} from '../../transaction/entities/transaction.entity'


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
userCreated: string  | null;
userModified: string  | null;
dtCreated: Date ;
dtModified: Date  | null;
customerType?: CustomerType ;
customerGroup?: CustomerGroup ;
city?: City ;
Transaction?: Transaction[] ;
}
