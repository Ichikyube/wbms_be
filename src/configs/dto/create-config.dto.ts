import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ConfigDataType, ConfigType, Status } from '../config.type';

export class CreateConfigDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  value?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  type?: ConfigType;

  @IsNotEmpty()
  @ApiProperty()
  status: Status;

  @IsNotEmpty()
  @ApiProperty()
  activeStart: Date;

  @IsNotEmpty()
  @ApiProperty()
  activeEnd: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  siteId: string;
}
