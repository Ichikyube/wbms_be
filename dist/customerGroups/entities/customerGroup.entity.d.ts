import { CustomerGroup } from '@prisma/client';
export declare class CustomerGroupEntity implements CustomerGroup {
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
