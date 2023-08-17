import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateGrantDto } from './create-grant.dto';

export class CreatePermissionDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  resource: string;

  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  readonly grants?: CreateGrantDto[];
}
