import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Customer {
  @ApiProperty({ type: String })
  id: string = undefined;

  @ApiProperty({ type: String })
  customerTypeId: string = undefined;

  @ApiProperty({ type: String })
  customerGroupId: string = undefined;

  @ApiProperty({ type: String })
  cityId: string = undefined;

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
  phone?: string = undefined;

  @ApiPropertyOptional({ type: String })
  url?: string = undefined;

  @ApiPropertyOptional({ type: String })
  contactName?: string = undefined;

  @ApiPropertyOptional({ type: String })
  contactEmail?: string = undefined;

  @ApiPropertyOptional({ type: String })
  contactPhone?: string = undefined;

  @ApiPropertyOptional({ type: Number })
  sortasi?: number = undefined;

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
