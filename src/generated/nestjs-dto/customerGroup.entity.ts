
import {Customer} from './customer.entity'


export class CustomerGroup {
  id: string ;
name: string ;
shortDesc: string  | null;
description: string  | null;
isDeleted: boolean ;
userCreated: string ;
userModified: string ;
dtCreated: Date ;
dtModified: Date ;
customers?: Customer[] ;
}
