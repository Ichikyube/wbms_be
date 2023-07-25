
import {RoleEntity} from './role.entity'
import {PermissionEntity} from './permission.entity'


export class RolePermissionEntity {
  id: number ;
roleId: number  | null;
role?: RoleEntity  | null;
permission?: PermissionEntity[] ;
userModified: string ;
dtModified: Date ;
}
