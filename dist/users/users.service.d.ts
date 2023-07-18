import { DbService } from 'src/db/db.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { UserEntity } from './entities';
export declare class UsersService {
    private db;
    constructor(db: DbService);
    getIAM(id: string): Promise<UserEntity>;
    getAll(): Promise<UserEntity[]>;
    getAllDeleted(): Promise<UserEntity[]>;
    getById(id: string): Promise<UserEntity>;
    create(dto: CreateUserDto): Promise<UserEntity>;
    updateById(id: string, dto: UpdateUserDto): Promise<UserEntity>;
    deleteById(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        username: string;
        email: string;
        nik: string;
        name: string;
        division: string;
        position: string;
        phone: string;
        hashedPassword: string;
        hashedRT: string;
        role: string;
        isEmailVerified: boolean;
        isLDAPUser: boolean;
        isDisabled: boolean;
        isDeleted: boolean;
        userCreated: string;
        userModified: string;
        dtCreated: Date;
        dtModified: Date;
    }, unknown> & {}>;
    searchFirst(query: any): void;
    searchMany(query: any): void;
    searchFirstDeleted(query: any): void;
    searchManyDeleted(query: any): void;
}
