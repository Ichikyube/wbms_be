import { Customer } from "@prisma/client";
export declare class CustomerEntity implements Customer {
    id: string;
    customerTypeId: string;
    customerGroupId: string;
    cityId: string;
    code: string;
    codeSap: string;
    name: string;
    shortName: string;
    address: string;
    addressExt: string;
    postalCode: string;
    phone: string;
    url: string;
    contactName: string;
    contactEmail: string;
    contactPhone: string;
    sortasi: number;
    isDeleted: boolean;
    userCreated: string;
    userModified: string;
    dtCreated: Date;
    dtModified: Date;
}
