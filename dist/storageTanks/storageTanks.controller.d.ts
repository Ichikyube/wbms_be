import { Request } from 'express';
import { StorageTanksService } from './storageTanks.service';
import { CreateStorageTankDto, UpdateStorageTankDto } from './dto';
export declare class StorageTanksController {
    private storageTanksService;
    constructor(storageTanksService: StorageTanksService);
    getAll(): Promise<{
        status: boolean;
        message: string;
        data: {
            storageTank: {
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
            storageTank: {
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
            storageTank: any;
        };
        logs: {};
    }>;
    searchFirst(query: any): Promise<{
        status: boolean;
        message: string;
        data: {
            storageTank: {
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
            storageTank: {
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
            storageTank: {
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
            storageTank: {
                records: any[];
                totalRecords: number;
                page: number;
            };
        };
        logs: {};
    }>;
    create(dto: CreateStorageTankDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            storageTank: any;
        };
        logs: {};
    }>;
    updateById(id: string, dto: UpdateStorageTankDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            storageTank: any;
        };
        logs: {};
    }>;
    deleteById(id: string, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            storageTank: any;
        };
        logs: {};
    }>;
}
