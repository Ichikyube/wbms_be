
import {Role} from './role.entity'
import {Permission} from './permission.entity'


export class RolePermission {
  id: number ;
roleId: number  | null;
role?: Role  | null;
permission?: Permission[] ;
userModified: string ;
dtModified: Date ;
}
