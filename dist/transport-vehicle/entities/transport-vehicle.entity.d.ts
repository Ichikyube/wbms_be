import { TransportVehicle } from "@prisma/client";
export declare class TransportVehicleEntity implements TransportVehicle {
    id: string;
    refType: number;
    refId: string;
    codeSap: string;
    companyId: string;
    companyRefId: string;
    companyName: string;
    productId: string;
    productRefId: string;
    productName: string;
    productCode: string;
    plateNo: string;
    capacity: number;
    brand: string;
    model: string;
    sccModel: number;
    notes: string;
    licenseED: Date;
    keurED: Date;
    isDeleted: boolean;
    userCreated: string;
    userModified: string;
    dtCreated: Date;
    dtModified: Date;
}
