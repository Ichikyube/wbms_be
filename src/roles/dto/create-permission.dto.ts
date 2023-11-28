import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsArray,
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
  @IsArray()
  readonly grants?: CreateGrantDto[];
}
