import { Request } from 'express';
import { ProductGroupsService } from './productGroups.service';
import { CreateProductGroupDto, UpdateProductGroupDto } from './dto';
export declare class ProductGroupsController {
    private productGroupsService;
    constructor(productGroupsService: ProductGroupsService);
    getAll(): Promise<{
        status: boolean;
        message: string;
        data: {
            productGroup: {
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
            productGroup: {
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
            productGroup: any;
        };
        logs: {};
    }>;
    searchFirst(query: any): Promise<{
        status: boolean;
        message: string;
        data: {
            productGroup: {
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
            productGroup: {
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
            productGroup: {
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
            productGroup: {
                records: any[];
                totalRecords: number;
                page: number;
            };
        };
        logs: {};
    }>;
    create(dto: CreateProductGroupDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            productGroup: any;
        };
        logs: {};
    }>;
    updateById(id: string, dto: UpdateProductGroupDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            productGroup: any;
        };
        logs: {};
    }>;
    deleteById(id: string, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            productGroup: any;
        };
        logs: {};
    }>;
}
