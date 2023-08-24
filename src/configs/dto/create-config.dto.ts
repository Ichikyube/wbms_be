import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Status } from '../config.type';

export class CreateConfigDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @ApiProperty({ type: String })
  description: string = undefined;

  @ApiProperty({ type: Number })
  lvlOfApprvl: number = undefined;

  @IsNotEmpty()
  @ApiProperty()
  status: Status;

  // @IsString()
  // @IsNotEmpty()
  // @ApiProperty()
  // siteId: string;
}
