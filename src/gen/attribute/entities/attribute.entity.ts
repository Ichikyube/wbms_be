
import {Grant} from '../../grant/entities/grant.entity'


export class Attribute {
  id: string ;
attr: string ;
grantId: string ;
grant?: Grant ;
}
