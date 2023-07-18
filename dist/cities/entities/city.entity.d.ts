import { City } from '@prisma/client';
export declare class CityEntity implements City {
    id: string;
    provinceId: string;
    name: string;
    isDeleted: boolean;
    userCreated: string;
    userModified: string;
    dtCreated: Date;
    dtModified: Date;
}
