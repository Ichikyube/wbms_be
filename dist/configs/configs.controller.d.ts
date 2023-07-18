import { ConfigsService } from './configs.service';
export declare class ConfigsController {
    private configsService;
    constructor(configsService: ConfigsService);
    getAll(): Promise<{
        status: boolean;
        message: string;
        page: number;
        totalRecords: number;
        records: {};
        logs: {};
    }>;
    getEnv(): Promise<{
        status: boolean;
        message: string;
        data: {};
        logs: {};
    }>;
    searchMany(query: any): Promise<{
        status: boolean;
        message: string;
        page: number;
        totalRecords: number;
        records: {};
        logs: {};
    }>;
    searchFirst(query: any): Promise<{
        status: boolean;
        message: string;
        record: {};
        logs: {};
    }>;
    getById(id: string): Promise<{
        status: boolean;
        message: string;
        page: number;
        totalRecords: number;
        record: {};
        logs: {};
    }>;
    create(dto: any): Promise<{
        status: boolean;
        message: string;
        page: number;
        totalRecords: number;
        record: {};
        logs: {};
    }>;
    updateById(id: string, dto: any): Promise<{
        status: boolean;
        message: string;
        page: number;
        totalRecords: number;
        record: {};
        logs: {};
    }>;
    deleteById(id: string): Promise<{
        status: boolean;
        message: string;
        page: number;
        totalRecords: number;
        record: {};
        logs: {};
    }>;
}
