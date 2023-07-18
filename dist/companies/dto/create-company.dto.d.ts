export declare class CreateCompanyDto {
    code: string;
    codeSap?: string;
    name: string;
    shortName?: string;
    address?: string;
    addressExt?: string;
    postalCode?: string;
    country?: string;
    province?: string;
    city?: string;
    phone?: string;
    url?: string;
    contactName?: string;
    contactEmail?: string;
    contactPhone?: string;
    isMillOperator: boolean;
    isTransporter: boolean;
    isSiteOperator: boolean;
    isEstate: boolean;
}
