import { ProductGroup } from '@prisma/client';
export declare class ProductGroupEntity implements ProductGroup {
    id: string;
    name: string;
    shortDesc: string;
    description: string;
    isDeleted: boolean;
    userCreated: string;
    userModified: string;
    dtCreated: Date;
    dtModified: Date;
}
