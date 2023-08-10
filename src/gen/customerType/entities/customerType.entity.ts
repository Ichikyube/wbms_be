
import {Customer} from '../../customer/entities/customer.entity'


export class CustomerType {
  id: string ;
name: string ;
shortDesc: string  | null;
description: string  | null;
isDeleted: boolean ;
userCreated: string  | null;
userModified: string  | null;
dtCreated: Date ;
dtModified: Date  | null;
customers?: Customer[] ;
}
