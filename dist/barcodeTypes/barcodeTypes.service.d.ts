import { DbService } from 'src/db/db.service';
export declare class BarcodeTypesService {
    private db;
    constructor(db: DbService);
    getAll(): Promise<{
        status: boolean;
        message: string;
        page: number;
        totalRecords: number;
        records: {};
        logs: {};
    }>;
    getAllDeleted(): Promise<{
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
    searchDeleted(query: any): Promise<{
        status: boolean;
        message: string;
        page: number;
        totalRecords: number;
        records: {};
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
