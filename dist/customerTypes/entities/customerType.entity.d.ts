import { CustomerType } from '@prisma/client';
export declare class CustomerTypeEntity implements CustomerType {
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
