import { Request } from "express";
import { UsersService } from "./users.service";
import { CreateUserDto, UpdateUserDto } from "./dto";
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
    searchFirst(query: any): Promise<import("./entities").UserEntity>;
    searchMany(query: any): Promise<import("./entities").UserEntity[]>;
    searchFirstDeleted(query: any): Promise<import("./entities").UserEntity>;
    searchDeleted(query: any): Promise<import("./entities").UserEntity[]>;
    create(dto: CreateUserDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            user: any;
        };
        logs: {};
    }>;
    updateById(userId: string, dto: UpdateUserDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            user: any;
        };
        logs: {};
    }>;
    deleteById(id: string, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            user: any;
        };
        logs: {};
    }>;
}
