import { Product } from '@prisma/client';
export declare class ProductEntity implements Product {
    id: string;
    refType: number;
    refId: string;
    productGroupName: string;
    code: string;
    codeSap: string;
    name: string;
    shortName: string;
    description: string;
    certification: string;
    isDeleted: boolean;
    userCreated: string;
    userModified: string;
    dtCreated: Date;
    dtModified: Date;
}
