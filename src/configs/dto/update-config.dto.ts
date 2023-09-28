import {ApiProperty} from '@nestjs/swagger'

export class UpdateConfigDto {
  name?: string;
  description?: string;
  lvlOfApprvl?: number;
  userCreated?: string;
  userModified?: string;
}
