
import {Grant} from '../../grant/entities/grant.entity'
import {Role} from '../../role/entities/role.entity'


export class Permission {
  id: string ;
resource: string ;
grants?: Grant[] ;
roleId: number ;
role?: Role ;
userCreated: string  | null;
userModified: string  | null;
dtCreated: Date ;
dtModified: Date  | null;
}
