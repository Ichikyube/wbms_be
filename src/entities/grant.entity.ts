import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsEnum, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { AttributeEntity } from './attribute.entity';
import { Type } from 'class-transformer';

export enum action {
  Read = 'read',
  Write = 'write',
  Update = 'update',
  Delete = 'delete',
}

export enum possession {
  OWN = 'own',
  ANY = 'any',
}
export class GrantEntity {
  @IsNotEmpty()
  // @IsEnum(action)
  @IsString()
  @ApiProperty({ enum: action }) //
  action: string;

  @IsNotEmpty()
  // @IsEnum(possession)
  @IsString()
  @ApiProperty({ enum: possession }) //
  possession: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => AttributeEntity)
  attributes: AttributeEntity[];
}
