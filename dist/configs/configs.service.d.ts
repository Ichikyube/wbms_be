import { DbService } from 'src/db/db.service';
import { ConfigService } from '@nestjs/config';
export declare class ConfigsService {
    private db;
    private config;
    constructor(db: DbService, config: ConfigService);
    getEnv(): Promise<{
        status: boolean;
        message: string;
        data: {};
        logs: {};
    }>;
    getAll(): Promise<{
        status: boolean;
        message: string;
        page: number;
        totalRecords: number;
        records: {};
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
    WbTransactionUrlMapping(): {
        1: {
            1: {
                0: string;
                15: string;
            };
            3: {
                10: string;
                15: string;
            };
            4: {
                15: string;
                20: string;
            };
            5: {
                23: string;
            };
        };
        2: {
            1: {
                0: string;
            };
            4: {
                20: string;
            };
        };
        3: {
            4: {
                20: string;
            };
        };
    };
    TransactionValidation(): {
        1: {
            1: {
                0: string;
                15: string;
            };
            3: {
                10: string;
                15: string;
            };
            4: {
                15: string;
                20: string;
            };
            5: {
                23: string;
            };
        };
        2: {
            1: {
                0: string;
            };
            4: {
                20: string;
            };
        };
        3: {
            4: {
                20: string;
            };
        };
    };
}
