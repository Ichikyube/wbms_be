import { Driver } from '@prisma/client';
export declare class DriverEntity implements Driver {
    id: string;
    refType: number;
    refId: string;
    codeSap: string;
    companyId: string;
    companyRefId: string;
    companyName: string;
    nik: string;
    name: string;
    address: string;
    email: string;
    phone: string;
    licenseNo: string;
    licenseED: Date;
    isDeleted: boolean;
    userCreated: string;
    userModified: string;
    dtCreated: Date;
    dtModified: Date;
}
