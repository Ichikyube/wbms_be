
import {Company} from '../../company/entities/company.entity'
import {Transaction} from '../../transaction/entities/transaction.entity'


export class Driver {
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
userCreated: string  | null;
userModified: string  | null;
dtCreated: Date ;
dtModified: Date  | null;
company?: Company  | null;
transactions?: Transaction[] ;
}
