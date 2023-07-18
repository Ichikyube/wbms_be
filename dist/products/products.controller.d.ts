import { Request } from 'express';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './dto';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getAll(): Promise<{
        status: boolean;
        message: string;
        data: {
            product: {
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
            product: {
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
            product: any;
        };
        logs: {};
    }>;
    searchFirst(query: any): Promise<{
        status: boolean;
        message: string;
        data: {
            product: {
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
            product: {
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
            product: {
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
            product: {
                records: any[];
                totalRecords: number;
                page: number;
            };
        };
        logs: {};
    }>;
    create(dto: CreateProductDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            product: any;
        };
        logs: {};
    }>;
    updateById(id: string, dto: UpdateProductDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            product: any;
        };
        logs: {};
    }>;
    deleteById(id: string, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            product: any;
        };
        logs: {};
    }>;
}
