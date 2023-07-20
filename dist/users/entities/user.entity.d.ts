import { User, UserRole } from '@prisma/client';
export declare class UserEntity implements User {
    id: string;
    username: string;
    email: string;
    nik: string;
    name: string;
    division: string;
    position: string;
    phone: string;
    hashedPassword: string;
    hashedRT: string | null;
    role: UserRole;
    isEmailVerified: boolean;
    isLDAPUser: boolean;
    isDisabled: boolean;
    isDeleted: boolean;
    userCreated: string;
    userModified: string;
    dtCreated: Date;
    dtModified: Date;
}
