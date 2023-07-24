import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Company {
  @ApiProperty({ type: String })
  id: string = undefined;

  @ApiProperty({ type: Number })
  refType: number = undefined;

  @ApiPropertyOptional({ type: String })
  refId?: string = undefined;

  @ApiProperty({ type: String })
  code: string = undefined;

  @ApiPropertyOptional({ type: String })
  codeSap?: string = undefined;

  @ApiProperty({ type: String })
  name: string = undefined;

  @ApiPropertyOptional({ type: String })
  shortName?: string = undefined;

  @ApiPropertyOptional({ type: String })
  address?: string = undefined;

  @ApiPropertyOptional({ type: String })
  addressExt?: string = undefined;

  @ApiPropertyOptional({ type: String })
  postalCode?: string = undefined;

  @ApiPropertyOptional({ type: String })
  country?: string = undefined;

  @ApiPropertyOptional({ type: String })
  province?: string = undefined;

  @ApiPropertyOptional({ type: String })
  city?: string = undefined;

  @ApiPropertyOptional({ type: String })
  phone?: string = undefined;

  @ApiPropertyOptional({ type: String })
  url?: string = undefined;

  @ApiPropertyOptional({ type: String })
  contactName?: string = undefined;

  @ApiPropertyOptional({ type: String })
  contactEmail?: string = undefined;

  @ApiPropertyOptional({ type: String })
  contactPhone?: string = undefined;

  @ApiProperty({ type: Boolean })
  isMillOperator: boolean = undefined;

  @ApiProperty({ type: Boolean })
  isTransporter: boolean = undefined;

  @ApiProperty({ type: Boolean })
  isSiteOperator: boolean = undefined;

  @ApiProperty({ type: Boolean })
  isEstate: boolean = undefined;

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
