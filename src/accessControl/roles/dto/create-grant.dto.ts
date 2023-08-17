import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateAttributeDto } from './create-attribute.dto';

export class CreateGrantDto {
  @IsNotEmpty()
  @IsString()
  action: string;

  @IsNotEmpty()
  @IsString()
  possession: string;

  @ValidateNested({ each: true })
  @IsOptional()
  readonly attributes?: CreateAttributeDto[];
}
