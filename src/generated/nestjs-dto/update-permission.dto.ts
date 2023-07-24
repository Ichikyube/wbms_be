
import {Prisma} from '@prisma/client'




export class UpdatePermissionDto {
  resource_id?: string;
actions?: Prisma.InputJsonValue;
attributes?: string;
possesion?: string;
role?: string;
userCreated?: string;
userModified?: string;
}
