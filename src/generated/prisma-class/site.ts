import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Site {
  @ApiProperty({ type: String })
  id: string = undefined;

  @ApiProperty({ type: Number })
  refType: number = undefined;

  @ApiPropertyOptional({ type: String })
  refId?: string = undefined;

  @ApiPropertyOptional({ type: String })
  sourceSiteId?: string = undefined;

  @ApiPropertyOptional({ type: String })
  sourceSiteRefId?: string = undefined;

  @ApiPropertyOptional({ type: String })
  sourceSiteName?: string = undefined;

  @ApiPropertyOptional({ type: String })
  companyId?: string = undefined;

  @ApiPropertyOptional({ type: String })
  companyRefId?: string = undefined;

  @ApiProperty({ type: String })
  companyName: string = undefined;

  @ApiPropertyOptional({ type: String })
  cityId?: string = undefined;

  @ApiProperty({ type: String })
  code: string = undefined;

  @ApiPropertyOptional({ type: String })
  codeSap?: string = undefined;

  @ApiProperty({ type: String })
  name: string = undefined;

  @ApiPropertyOptional({ type: String })
  shortName?: string = undefined;

  @ApiPropertyOptional({ type: String })
  description?: string = undefined;

  @ApiPropertyOptional({ type: Number })
  latitude?: number = undefined;

  @ApiPropertyOptional({ type: Number })
  longitude?: number = undefined;

  @ApiPropertyOptional({ type: Number })
  solarCalibration?: number = undefined;

  @ApiProperty({ type: Boolean })
  isMill: boolean = undefined;

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
