import { Request } from "express";
import { ProvincesService } from "./provinces.service";
import { CreateProvinceDto, UpdateProvinceDto } from "./dto";
export declare class ProvincesController {
    private readonly provincesService;
    constructor(provincesService: ProvincesService);
    getAll(): Promise<{
        status: boolean;
        message: string;
        data: {
            province: {
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
            province: {
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
            province: any;
        };
        logs: {};
    }>;
    searchFirst(query: any): Promise<{
        status: boolean;
        message: string;
        data: {
            province: {
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
            province: {
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
            province: {
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
            province: {
                records: any[];
                totalRecords: number;
                page: number;
            };
        };
        logs: {};
    }>;
    create(dto: CreateProvinceDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            province: any;
        };
        logs: {};
    }>;
    updateById(id: string, dto: UpdateProvinceDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            province: any;
        };
        logs: {};
    }>;
    deleteById(id: string, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            province: any;
        };
        logs: {};
    }>;
}
