import { Mill } from '@prisma/client';
export declare class MillEntity implements Mill {
    id: string;
    siteId: string;
    companyId: string;
    code: string;
    name: string;
    isDeleted: boolean;
    userCreated: string;
    userModified: string;
    dtCreated: Date;
    dtModified: Date;
}
