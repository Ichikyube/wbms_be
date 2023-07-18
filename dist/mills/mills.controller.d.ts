import { Request } from 'express';
import { MillsService } from './mills.service';
import { CreateMillDto, UpdateMillDto } from './dto';
export declare class MillsController {
    private millsService;
    constructor(millsService: MillsService);
    getAll(): Promise<{
        status: boolean;
        message: string;
        data: {
            mill: {
                records: any[];
                totalRecords: number;
                page: number;
            };
        };
        logs: {};
    }>;
    getAllDeleted(): Promise<{
        status: boolean;
        message: string;
        data: {
            mill: {
                records: any[];
                totalRecords: number;
                page: number;
            };
        };
        logs: {};
    }>;
    getById(id: string): Promise<{
        status: boolean;
        message: string;
        data: {
            mill: any;
        };
        logs: {};
    }>;
    searchFirst(query: any): Promise<{
        status: boolean;
        message: string;
        data: {
            mill: {
                records: any[];
                totalRecords: number;
                page: number;
            };
        };
        logs: {};
    }>;
    searchMany(query: any): Promise<{
        status: boolean;
        message: string;
        data: {
            mill: {
                records: any[];
                totalRecords: number;
                page: number;
            };
        };
        logs: {};
    }>;
    searchFirstDeleted(query: any): Promise<{
        status: boolean;
        message: string;
        data: {
            mill: {
                records: any[];
                totalRecords: number;
                page: number;
            };
        };
        logs: {};
    }>;
    searchManyDeleted(query: any): Promise<{
        status: boolean;
        message: string;
        data: {
            mill: {
                records: any[];
                totalRecords: number;
                page: number;
            };
        };
        logs: {};
    }>;
    create(dto: CreateMillDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            mill: any;
        };
        logs: {};
    }>;
    updateById(id: string, dto: UpdateMillDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            mill: any;
        };
        logs: {};
    }>;
    deleteById(id: string, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            mill: any;
        };
        logs: {};
    }>;
}
