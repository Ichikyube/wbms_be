/// <reference types="node" />
import { ConfigService } from '@nestjs/config';
import * as https from 'https';
import { DbService } from 'src/db/db.service';
import { DecodeQrcodeDto } from './dto/decode-qrcode.dto';
import { UpdateSemaiDto } from './dto/update-semai.dto';
export declare class SemaiService {
    private db;
    private config;
    constructor(db: DbService, config: ConfigService);
    WBMS_SEMAI_API_URL: any;
    WBMS_SEMAI_API_KEY: any;
    WBMS_SEMAI_CERT: any;
    WBMS_SEMAI_KEY: any;
    httpsAgent: https.Agent;
    api: import("axios").AxiosInstance;
    create(createSemaiDto: DecodeQrcodeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSemaiDto: UpdateSemaiDto): string;
    remove(id: number): string;
    products(): Promise<{
        status: boolean;
        message: string;
        data: {
            products: any[];
        };
        logs: {};
    }>;
    sites(): Promise<{
        status: boolean;
        message: string;
        data: {
            sites: any[];
        };
        logs: {};
    }>;
    storageTanks(): Promise<{
        status: boolean;
        message: string;
        data: {
            storageTanks: any[];
        };
        logs: {};
    }>;
    transportVehicles(): Promise<{
        status: boolean;
        message: string;
        data: {
            transportVehicles: any[];
        };
        logs: {};
    }>;
    transporters(): Promise<{
        status: boolean;
        message: string;
        data: {
            transporters: any[];
        };
        logs: {};
    }>;
    vehicleOperators(): Promise<{
        status: boolean;
        message: string;
        data: {
            vehicleOperators: any[];
        };
        logs: {};
    }>;
    decodeQrcode(dto: DecodeQrcodeDto): Promise<{
        status: boolean;
        message: string;
        data: {
            decodedQrcode: {};
        };
        logs: {};
    }>;
    encodeQrcode(dto: any): Promise<{
        status: boolean;
        message: string;
        data: {
            qrcode: {};
        };
        logs: {};
    }>;
    dispatchDelivery(dto: any): Promise<{
        status: boolean;
        message: string;
        data: {
            transaction: {};
        };
        logs: {};
    }>;
    rejectDelivery(dto: any): Promise<{
        status: boolean;
        message: string;
        data: {
            transaction: {};
        };
        logs: {};
    }>;
    closeDeliveryCanceled(dto: any): Promise<{
        status: boolean;
        message: string;
        data: {
            transaction: {};
        };
        logs: {};
    }>;
    closeDeliveryAccepted(dto: any): Promise<{
        status: boolean;
        message: string;
        data: {
            transaction: {};
        };
        logs: {};
    }>;
    closeDeliveryRejected(dto: any): Promise<{
        status: boolean;
        message: string;
        data: {
            transaction: {};
        };
        logs: {};
    }>;
    validateDispatchDelivery(dto: any): Promise<{
        status: boolean;
        message: string;
        data: {
            transaction: {};
        };
        logs: {};
    }>;
    validateUnloading(dto: any): Promise<{
        status: boolean;
        message: string;
        data: {
            transaction: {};
        };
        logs: {};
    }>;
}
