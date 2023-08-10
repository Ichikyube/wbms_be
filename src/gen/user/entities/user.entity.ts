
import {Role} from '../../role/entities/role.entity'


export class User {
  id: string ;
username: string ;
email: string ;
nik: string ;
name: string ;
phone: string  | null;
division: string ;
position: string ;
profilePic: string ;
roleId: number  | null;
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
dtModified: Date  | null;
userRole?: Role  | null;
}
