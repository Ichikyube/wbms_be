import { Request } from 'express';
import { CustomerGroupsService } from './customerGroups.service';
import { CreateCustomerGroupDto, UpdateCustomerGroupDto } from './dto';
export declare class CustomerGroupsController {
    private customerGroupsService;
    constructor(customerGroupsService: CustomerGroupsService);
    getAll(): Promise<{
        status: boolean;
        message: string;
        data: {
            customerGroups: {
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
            customerGroups: {
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
            customerGroups: any;
        };
        logs: {};
    }>;
    searchFirst(query: any): Promise<{
        status: boolean;
        message: string;
        data: {
            customerGroups: {
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
            customerGroups: {
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
            customerGroups: {
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
            customerGroups: {
                records: any[];
                totalRecords: number;
                page: number;
            };
        };
        logs: {};
    }>;
    create(dto: CreateCustomerGroupDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            customerGroups: any;
        };
        logs: {};
    }>;
    updateById(id: string, dto: UpdateCustomerGroupDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            customerGroups: any;
        };
        logs: {};
    }>;
    deleteById(id: string, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            customerGroups: any;
        };
        logs: {};
    }>;
}
