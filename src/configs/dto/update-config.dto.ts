
import { Status} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateConfigDto {
  name?: string;
  description?: string;
  lvlOfApprvl?: number;
  @ApiProperty({ enum: Status})
  status?: Status;
  userCreated?: string;
  userModified?: string;
}
