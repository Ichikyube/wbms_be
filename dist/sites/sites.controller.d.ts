import { Request } from 'express';
import { SitesService } from './sites.service';
import { CreateSiteDto, UpdateSiteDto } from './dto';
export declare class SitesController {
    private readonly sitesService;
    constructor(sitesService: SitesService);
    syncWithSemai(): Promise<{
        status: boolean;
        message: string;
        data: {
            site: {
                records: any[];
                totalRecords: number;
                page: number;
            };
        };
        logs: {};
    }>;
    getAll(): Promise<{
        status: boolean;
        message: string;
        data: {
            site: {
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
            site: {
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
            site: any;
        };
        logs: {};
    }>;
    searchFirst(query: any): Promise<{
        status: boolean;
        message: string;
        data: {
            site: {
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
            site: {
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
            site: {
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
            site: {
                records: any[];
                totalRecords: number;
                page: number;
            };
        };
        logs: {};
    }>;
    create(dto: CreateSiteDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            site: any;
        };
        logs: {};
    }>;
    updateById(id: string, dto: UpdateSiteDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            site: any;
        };
        logs: {};
    }>;
    deleteById(id: string, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            site: any;
        };
        logs: {};
    }>;
}
