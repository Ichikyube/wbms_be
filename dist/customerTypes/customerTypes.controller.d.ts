import { Request } from 'express';
import { CustomerTypesService } from './customerTypes.service';
import { CreateCustomerTypeDto, UpdateCustomerTypeDto } from './dto';
export declare class CustomerTypesController {
    private customerTypesService;
    constructor(customerTypesService: CustomerTypesService);
    getAll(): Promise<{
        status: boolean;
        message: string;
        data: {
            customerType: {
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
            customerType: {
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
            customerType: any;
        };
        logs: {};
    }>;
    searchFirst(query: any): Promise<{
        status: boolean;
        message: string;
        data: {
            customerType: {
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
            customerType: {
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
            customerType: {
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
            customerType: {
                records: any[];
                totalRecords: number;
                page: number;
            };
        };
        logs: {};
    }>;
    create(dto: CreateCustomerTypeDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            customerType: any;
        };
        logs: {};
    }>;
    updateById(id: string, dto: UpdateCustomerTypeDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            customerType: any;
        };
        logs: {};
    }>;
    deleteById(id: string, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            customerType: any;
        };
        logs: {};
    }>;
}
