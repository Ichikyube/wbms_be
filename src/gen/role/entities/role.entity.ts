
import {Permission} from '../../permission/entities/permission.entity'
import {User} from '../../user/entities/user.entity'


export class Role {
  id: number ;
name: string ;
permissions?: Permission[] ;
userCreated: string  | null;
userModified: string  | null;
dtCreated: Date ;
dtModified: Date  | null;
users?: User[] ;
}
