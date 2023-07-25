
import {RoleEntity} from './role.entity'


export class UserEntity {
  id: string ;
username: string ;
email: string ;
nik: string ;
name: string ;
phone: string  | null;
address: string ;
birthDate: Date ;
division: string ;
position: string ;
profilePic: string ;
roleId: number ;
role: string ;
hashedPassword: string ;
hashedRT: string  | null;
isEmailVerified: boolean ;
isLDAPUser: boolean ;
isDisabled: boolean ;
isDeleted: boolean ;
userCreated: string  | null;
userModified: string  | null;
dtCreated: Date ;
dtModified: Date ;
roleModel?: RoleEntity ;
}
