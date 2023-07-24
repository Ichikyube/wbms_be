import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class StorageTank {
  @ApiProperty({ type: String })
  id: string = undefined;

  @ApiProperty({ type: Number })
  refType: number = undefined;

  @ApiPropertyOptional({ type: String })
  refId?: string = undefined;

  @ApiPropertyOptional({ type: String })
  siteId?: string = undefined;

  @ApiPropertyOptional({ type: String })
  siteRefId?: string = undefined;

  @ApiProperty({ type: String })
  siteName: string = undefined;

  @ApiPropertyOptional({ type: String })
  stockOwnerId?: string = undefined;

  @ApiPropertyOptional({ type: String })
  stockOwnerRefId?: string = undefined;

  @ApiPropertyOptional({ type: String })
  stockOwnerName?: string = undefined;

  @ApiPropertyOptional({ type: String })
  productId?: string = undefined;

  @ApiPropertyOptional({ type: String })
  productRefId?: string = undefined;

  @ApiPropertyOptional({ type: String })
  productName?: string = undefined;

  @ApiProperty({ type: String })
  code: string = undefined;

  @ApiProperty({ type: String })
  codeSap: string = undefined;

  @ApiProperty({ type: String })
  name: string = undefined;

  @ApiPropertyOptional({ type: String })
  shortName?: string = undefined;

  @ApiPropertyOptional({ type: String })
  description?: string = undefined;

  @ApiPropertyOptional({ type: Number })
  capacity?: number = undefined;

  @ApiPropertyOptional({ type: Number })
  height?: number = undefined;

  @ApiProperty({ type: Number })
  sccModel: number = undefined;

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
