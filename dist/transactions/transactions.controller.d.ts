import { TransactionService } from './transactions.service';
import { CreateTransactionDto } from './dto';
export declare class TransactionController {
    private transactionService;
    constructor(transactionService: TransactionService);
    getAll(): Promise<{
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
    create(dto: CreateTransactionDto): Promise<{
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
}
