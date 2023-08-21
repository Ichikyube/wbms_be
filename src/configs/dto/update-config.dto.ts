
import {ConfigType,Status} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateConfigDto {
  name?: string;
  description?: string;
  @ApiProperty({ enum: ConfigType})npm 
  type?: ConfigType;
  value?: string;
  editedValue?: string;
  lvlOfApprvl?: number;
  @ApiProperty({ enum: Status})
  status?: Status;
  start?: Date;
  end?: Date;
  userCreated?: string;
  userModified?: string;
}
