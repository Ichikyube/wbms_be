import {ApiProperty} from '@nestjs/swagger'

export class UpdateConfigDto {
  name?: string;
  description?: string;
  lvlOfApprvl?: number;
  tempValue?: string;
  userCreated?: string;
  userModified?: string;
  
}
