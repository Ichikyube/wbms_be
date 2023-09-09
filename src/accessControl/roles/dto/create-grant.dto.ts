import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateAttributeDto } from './create-attribute.dto';

export class CreateGrantDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  action: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  possession: string;

  @IsOptional()  
  @IsArray()
  readonly attributes?: CreateAttributeDto[];
}
