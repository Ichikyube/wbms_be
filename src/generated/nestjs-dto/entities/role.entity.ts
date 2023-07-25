
import {RolePermissionEntity} from './rolePermission.entity'
import {UserEntity} from './user.entity'


export class RoleEntity {
  id: number ;
name: string ;
description: string ;
RolePermission?: RolePermissionEntity[] ;
userCreated: string ;
userModified: string ;
dtCreated: Date ;
dtModified: Date ;
users?: UserEntity[] ;
}
