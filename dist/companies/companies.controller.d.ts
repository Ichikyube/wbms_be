import { Request } from 'express';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto, UpdateCompanyDto } from './dto';
import { CompanyEntity } from './entities';
export declare class CompaniesController {
    private companiesService;
    constructor(companiesService: CompaniesService);
    getAll(): Promise<CompanyEntity[] | {
        status: boolean;
        message: string;
        data: {
            company: {
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
            company: {
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
            company: any;
        };
        logs: {};
    }>;
    searchFirst(query: any): Promise<{
        status: boolean;
        message: string;
        data: {
            company: {
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
            company: {
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
            company: {
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
            company: {
                records: any[];
                totalRecords: number;
                page: number;
            };
        };
        logs: {};
    }>;
    create(dto: CreateCompanyDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            company: any;
        };
        logs: {};
    }>;
    updateById(id: string, dto: UpdateCompanyDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            company: any;
        };
        logs: {};
    }>;
    deleteById(id: string, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            company: any;
        };
        logs: {};
    }>;
}
