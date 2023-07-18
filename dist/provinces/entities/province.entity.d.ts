import { Province } from '@prisma/client';
export declare class ProvinceEntity implements Province {
    id: string;
    name: string;
    isDeleted: boolean;
    userCreated: string;
    userModified: string;
    dtCreated: Date;
    dtModified: Date;
}
