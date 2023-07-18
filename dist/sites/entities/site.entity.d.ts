import { Site } from '@prisma/client';
export declare class SiteEntity implements Site {
    id: string;
    refType: number;
    refId: string;
    sourceSiteId: string;
    sourceSiteRefId: string;
    sourceSiteName: string;
    companyId: string;
    companyRefId: string;
    companyName: string;
    cityId: string;
    code: string;
    codeSap: string;
    name: string;
    shortName: string;
    description: string;
    latitude: number;
    longitude: number;
    solarCalibration: number;
    isMill: boolean;
    isDeleted: boolean;
    userCreated: string;
    userModified: string;
    dtCreated: Date;
    dtModified: Date;
}
