import { Weighbridge } from '@prisma/client';
export declare class WeighbridgeEntity implements Weighbridge {
    id: string;
    siteId: string;
    code: string;
    name: string;
    isDeleted: boolean;
    userCreated: string;
    userModified: string;
    dtCreated: Date;
    dtModified: Date;
}
