
import {Prisma} from '@prisma/client'
import {RolePermission} from './rolePermission.entity'


export class Permission {
  id: number ;
resource_id: string ;
actions: Prisma.JsonValue ;
attributes: string ;
possesion: string ;
role: string ;
role_permission_id: number ;
role_permission?: RolePermission ;
userCreated: string ;
userModified: string ;
dtCreated: Date ;
dtModified: Date ;
}
