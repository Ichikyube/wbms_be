
import {Attribute} from '../../attribute/entities/attribute.entity'
import {Permission} from '../../permission/entities/permission.entity'


export class Grant {
  id: string ;
action: string ;
possession: string ;
attributes?: Attribute[] ;
permissionId: string ;
permission?: Permission ;
userCreated: string  | null;
userModified: string  | null;
dtCreated: Date ;
dtModified: Date  | null;
}
