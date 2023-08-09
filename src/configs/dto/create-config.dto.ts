import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ConfigDataType, ConfigType, Status } from '../config.type';

export class CreateConfigDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @ApiProperty({ type: String })
  description: string = undefined;

  @IsString()
  @IsOptional()
  @ApiProperty()
  value?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  editedValue?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  type?: ConfigType;

  @ApiProperty({ type: Number })
  lvlOfApprvl: number = undefined;

  @IsNotEmpty()
  @ApiProperty()
  status: Status;

  @ApiProperty({ type: Date })
  start?: Date;

  @ApiProperty({ type: Date })
  end?: Date;

  // @IsString()
  // @IsNotEmpty()
  // @ApiProperty()
  // siteId: string;
}
