import { ConfigService } from '@nestjs/config';
import { DbService } from 'src/db/db.service';
import { SemaiService } from 'src/semai/semai.service';
import { ConfigsService } from 'src/configs/configs.service';
export declare class TransactionService {
    private db;
    private config;
    private semaiAPI;
    private configWbms;
    constructor(db: DbService, config: ConfigService, semaiAPI: SemaiService, configWbms: ConfigsService);
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
    openCreateByQrcodeSemai(body: any): Promise<{
        status: boolean;
        message: string;
        data: {
            transaction: {};
            tType: string;
            urlPath: string;
        };
        logs: {};
    }>;
    searchByQR(query: any): Promise<{
        status: boolean;
        message: string;
        data: {};
        logs: {};
    }>;
    getByPlateNo(query: any): Promise<{
        status: boolean;
        message: string;
        page: number;
        totalRecords: number;
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
    private copyQrToTransaction;
}
