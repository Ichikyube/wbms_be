
import {ConfigType,Status} from '@prisma/client'


export class Config {
  id: number ;
name: string ;
description: string ;
type: ConfigType  | null;
value: string  | null;
editedValue: string  | null;
lvlOfApprvl: number ;
status: Status ;
start: Date  | null;
end: Date  | null;
isDeleted: boolean ;
userCreated: string  | null;
userModified: string  | null;
dtCreated: Date ;
dtModified: Date  | null;
}
