
import {Prisma} from '@prisma/client'




export class CreatePermissionDto {
  resource_id: string;
actions: Prisma.InputJsonValue;
attributes: string;
possesion: string;
role: string;
userCreated: string;
userModified: string;
}
