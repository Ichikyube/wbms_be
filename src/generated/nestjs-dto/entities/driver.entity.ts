
import {CompanyEntity} from './company.entity'
import {TransactionEntity} from './transaction.entity'


export class DriverEntity {
  id: string ;
refType: number ;
refId: string  | null;
codeSap: string ;
companyId: string  | null;
companyRefId: string  | null;
companyName: string ;
nik: string ;
name: string ;
address: string  | null;
email: string  | null;
phone: string  | null;
licenseNo: string  | null;
licenseED: Date  | null;
isDeleted: boolean ;
userCreated: string ;
userModified: string ;
dtCreated: Date ;
dtModified: Date ;
company?: CompanyEntity  | null;
transactions?: TransactionEntity[] ;
}
