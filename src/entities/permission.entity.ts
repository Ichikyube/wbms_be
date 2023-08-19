import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { GrantEntity } from './grant.entity';

export class PermissionEntity {
  @ApiProperty() id: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  resource: string;

  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => GrantEntity)
  readonly grants?: GrantEntity[];
  @ApiProperty() @IsNumber() @IsNotEmpty() roleId: number;

  userCreated?: string;
  userModified?: string;
  dtCreated?: Date;
  dtModified?: Date;
}
