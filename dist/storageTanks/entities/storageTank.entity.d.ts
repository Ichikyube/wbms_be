import { StorageTank } from "@prisma/client";
export declare class StorageTankEntity implements StorageTank {
    id: string;
    refType: number;
    refId: string;
    siteId: string;
    siteRefId: string;
    siteName: string;
    stockOwnerId: string;
    stockOwnerRefId: string;
    stockOwnerName: string;
    productId: string;
    productRefId: string;
    productName: string;
    code: string;
    codeSap: string;
    name: string;
    shortName: string;
    description: string;
    capacity: number;
    height: number;
    sccModel: number;
    isDeleted: boolean;
    userCreated: string;
    userModified: string;
    dtCreated: Date;
    dtModified: Date;
}
