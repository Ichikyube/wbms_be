import { Request } from 'express';
import { WeighbridgesService } from './weighbridges.service';
import { CreateWeighbridgeDto, UpdateWeighbridgeDto } from './dto';
export declare class WeighbridgesController {
    private weighbridgesService;
    constructor(weighbridgesService: WeighbridgesService);
    getAll(): Promise<{
        status: boolean;
        message: string;
        data: {
            weighbridge: {
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
            weighbridge: {
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
            weighbridge: any;
        };
        logs: {};
    }>;
    searchFirst(query: any): Promise<{
        status: boolean;
        message: string;
        data: {
            weighbridge: {
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
            weighbridge: {
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
            weighbridge: {
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
            weighbridge: {
                records: any[];
                totalRecords: number;
                page: number;
            };
        };
        logs: {};
    }>;
    create(dto: CreateWeighbridgeDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            weighbridge: any;
        };
        logs: {};
    }>;
    updateById(id: string, dto: UpdateWeighbridgeDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            weighbridge: any;
        };
        logs: {};
    }>;
    deleteById(id: string, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            weighbridge: any;
        };
        logs: {};
    }>;
}
