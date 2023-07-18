import { Request } from 'express';
import { DriverService } from './driver.service';
import { CreateDriverDto, UpdateDriverDto } from './dto';
export declare class DriverController {
    private readonly driverService;
    constructor(driverService: DriverService);
    getAll(): Promise<{
        status: boolean;
        message: string;
        data: {
            driver: {
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
            driver: {
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
            driver: any;
        };
        logs: {};
    }>;
    searchFirst(query: any): Promise<{
        status: boolean;
        message: string;
        data: {
            driver: {
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
            driver: {
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
            driver: {
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
            driver: {
                records: any[];
                totalRecords: number;
                page: number;
            };
        };
        logs: {};
    }>;
    create(dto: CreateDriverDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            driver: any;
        };
        logs: {};
    }>;
    updateById(id: string, dto: UpdateDriverDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            driver: any;
        };
        logs: {};
    }>;
    deleteById(id: string, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            driver: any;
        };
        logs: {};
    }>;
}
