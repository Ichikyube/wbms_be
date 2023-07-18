import { Request } from 'express';
import { CustomersService } from './customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from './dto';
export declare class CustomersController {
    private customersService;
    constructor(customersService: CustomersService);
    getAll(): Promise<{
        status: boolean;
        message: string;
        data: {
            customer: {
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
            customer: {
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
            customer: any;
        };
        logs: {};
    }>;
    searchFirst(query: any): Promise<{
        status: boolean;
        message: string;
        data: {
            customer: {
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
            customer: {
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
            customer: {
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
            customer: {
                records: any[];
                totalRecords: number;
                page: number;
            };
        };
        logs: {};
    }>;
    create(dto: CreateCustomerDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            customer: any;
        };
        logs: {};
    }>;
    updateById(id: string, dto: UpdateCustomerDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            customer: any;
        };
        logs: {};
    }>;
    deleteById(id: string, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            customer: any;
        };
        logs: {};
    }>;
}
