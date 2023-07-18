import { SemaiService } from './semai.service';
import { DecodeQrcodeDto } from './dto';
export declare class SemaiController {
    private readonly semaiService;
    constructor(semaiService: SemaiService);
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
    closeDeliveryAccepted(dto: any): Promise<{
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
    encodeQrcode(dto: any): Promise<{
        status: boolean;
        message: string;
        data: {
            qrcode: {};
        };
        logs: {};
    }>;
}
