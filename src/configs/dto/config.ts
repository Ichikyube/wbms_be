import { Site } from './site';
import { ConfigType, Status } from '@prisma/client';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Config {
  @ApiProperty({ type: Number })
  id: number = undefined;

  @ApiProperty({ type: String })
  name: string = undefined;

  @ApiProperty({ type: String })
  description: string = undefined;

  @ApiPropertyOptional({ enum: ConfigType, enumName: 'ConfigType' })
  type?: ConfigType = undefined;

  @ApiPropertyOptional({ type: String })
  value?: string = undefined;

  @ApiProperty({ type: Number })
  lvlOfApprvl: number = undefined;

  @ApiProperty({ enum: Status, enumName: 'Status' })
  status: Status = undefined;

  @ApiProperty({ type: Date })
  start: Date = undefined;

  @ApiProperty({ type: Date })
  end: Date = undefined;

  @ApiProperty({ isArray: true, type: () => Site })
  sites: Site[] = undefined;

  @ApiProperty({ type: Boolean })
  isDeleted: boolean = undefined;

  @ApiProperty({ type: String })
  userCreated: string = undefined;

  @ApiProperty({ type: String })
  userModified: string = undefined;

  @ApiProperty({ type: Date })
  dtCreated: Date = undefined;

  @ApiProperty({ type: Date })
  dtModified: Date = undefined;
}
