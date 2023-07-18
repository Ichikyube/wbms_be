import { Request } from 'express';
import { TransportVehicleService } from './transport-vehicle.service';
import { CreateTransportVehicleDto, UpdateTransportVehicleDto } from './dto';
export declare class TransportVehicleController {
    private readonly transportVehicleService;
    constructor(transportVehicleService: TransportVehicleService);
    getAll(): Promise<{
        status: boolean;
        message: string;
        data: {
            transportVehicle: {
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
            transportVehicle: {
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
            transportVehicle: any;
        };
        logs: {};
    }>;
    searchFirst(query: any): Promise<{
        status: boolean;
        message: string;
        data: {
            transportVehicle: {
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
            transportVehicle: {
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
            transportVehicle: {
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
            transportVehicle: {
                records: any[];
                totalRecords: number;
                page: number;
            };
        };
        logs: {};
    }>;
    create(dto: CreateTransportVehicleDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            transportVehicle: any;
        };
        logs: {};
    }>;
    updateById(id: string, dto: UpdateTransportVehicleDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            transportVehicle: any;
        };
        logs: {};
    }>;
    deleteById(id: string, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            transportVehicle: any;
        };
        logs: {};
    }>;
}
