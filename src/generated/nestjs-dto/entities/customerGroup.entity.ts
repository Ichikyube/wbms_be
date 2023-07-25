
import {CustomerEntity} from './customer.entity'


export class CustomerGroupEntity {
  id: string ;
name: string ;
shortDesc: string  | null;
description: string  | null;
isDeleted: boolean ;
userCreated: string ;
userModified: string ;
dtCreated: Date ;
dtModified: Date ;
customers?: CustomerEntity[] ;
}
