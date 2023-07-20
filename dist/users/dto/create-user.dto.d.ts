import { UserRole } from "@prisma/client";
export declare class CreateUserDto {
    username: string;
    email: string;
    nik: string;
    name: string;
    division: string;
    position: string;
    phone?: string;
    password: string;
    role?: UserRole;
    isLDAPUser: boolean;
}
