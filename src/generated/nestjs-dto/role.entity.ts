
import {RolePermission} from './rolePermission.entity'
import {User} from './user.entity'


export class Role {
  id: number ;
name: string ;
description: string ;
RolePermission?: RolePermission[] ;
userCreated: string ;
userModified: string ;
dtCreated: Date ;
dtModified: Date ;
users?: User[] ;
}
