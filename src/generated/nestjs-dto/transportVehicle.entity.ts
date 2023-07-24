
import {Company} from './company.entity'
import {Product} from './product.entity'


export class TransportVehicle {
  id: string ;
refType: number ;
refId: string  | null;
codeSap: string ;
companyId: string  | null;
companyRefId: string  | null;
companyName: string ;
productId: string  | null;
productRefId: string  | null;
productName: string ;
productCode: string ;
plateNo: string ;
capacity: number  | null;
brand: string  | null;
model: string  | null;
sccModel: number ;
notes: string  | null;
licenseED: Date  | null;
keurED: Date  | null;
isDeleted: boolean ;
userCreated: string ;
userModified: string ;
dtCreated: Date ;
dtModified: Date ;
company?: Company  | null;
product?: Product  | null;
}
