import { Request } from 'express';
import { CitiesService } from './cities.service';
import { CreateCityDto, UpdateCityDto } from './dto';
export declare class CitiesController {
    private citiesService;
    constructor(citiesService: CitiesService);
    getAll(): Promise<{
        status: boolean;
        message: string;
        data: {
            city: {
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
            city: {
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
            city: any;
        };
        logs: {};
    }>;
    searchFirst(query: any): Promise<{
        status: boolean;
        message: string;
        data: {
            city: {
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
            city: {
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
            city: {
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
            city: {
                records: any[];
                totalRecords: number;
                page: number;
            };
        };
        logs: {};
    }>;
    create(dto: CreateCityDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            city: any;
        };
        logs: {};
    }>;
    updateById(id: string, dto: UpdateCityDto, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            city: any;
        };
        logs: {};
    }>;
    deleteById(id: string, req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            city: any;
        };
        logs: {};
    }>;
}
