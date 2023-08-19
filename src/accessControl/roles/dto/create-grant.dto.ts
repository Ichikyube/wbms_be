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
  @ApiProperty({ type: String })
  action: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  possession: string;

  @ValidateNested({ each: true })
  @IsOptional()
  readonly attributes?: CreateAttributeDto[];
}
