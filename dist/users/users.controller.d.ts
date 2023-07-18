import { Request } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getIAM(req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            user: any;
        };
        logs: {};
    }>;
    getAll(): Promise<{
        status: boolean;
        message: string;
        data: {
            user: {
                page: number;
                totalRecords: number;
                records: any[];
            };
        };
        logs: {};
    }>;
    getAllDeleted(): Promise<{
        status: boolean;
        message: string;
        data: {
            user: {
                page: number;
                totalRecords: number;
                records: any[];
            };
        };
        logs: {};
    }>;
    getById(userId: string): Promise<{
        status: boolean;
        message: string;
        data: {
            user: {
                page: number;
                totalRecords: number;
                records: any[];
            };
        };
        logs: {};
    }>;
    searchFirst(query: any): void;
    searchMany(query: any): void;
    searchFirstDeleted(query: any): void;
    searchDeleted(query: any): void;
    create(dto: CreateUserDto): Promise<{
        status: boolean;
        message: string;
        data: {
            user: any;
        };
        logs: {};
    }>;
    updateById(userId: string, dto: UpdateUserDto): Promise<{
        status: boolean;
        message: string;
        data: {
            user: any;
        };
        logs: {};
    }>;
    deleteById(userId: string): Promise<{
        status: boolean;
        message: string;
        data: {
            user: any;
        };
        logs: {};
    }>;
}
