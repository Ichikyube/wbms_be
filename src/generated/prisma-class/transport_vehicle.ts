import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TransportVehicle {
  @ApiProperty({ type: String })
  id: string = undefined;

  @ApiProperty({ type: Number })
  refType: number = undefined;

  @ApiPropertyOptional({ type: String })
  refId?: string = undefined;

  @ApiProperty({ type: String })
  codeSap: string = undefined;

  @ApiPropertyOptional({ type: String })
  companyId?: string = undefined;

  @ApiPropertyOptional({ type: String })
  companyRefId?: string = undefined;

  @ApiProperty({ type: String })
  companyName: string = undefined;

  @ApiPropertyOptional({ type: String })
  productId?: string = undefined;

  @ApiPropertyOptional({ type: String })
  productRefId?: string = undefined;

  @ApiProperty({ type: String })
  productName: string = undefined;

  @ApiProperty({ type: String })
  productCode: string = undefined;

  @ApiProperty({ type: String })
  plateNo: string = undefined;

  @ApiPropertyOptional({ type: Number })
  capacity?: number = undefined;

  @ApiPropertyOptional({ type: String })
  brand?: string = undefined;

  @ApiPropertyOptional({ type: String })
  model?: string = undefined;

  @ApiProperty({ type: Number })
  sccModel: number = undefined;

  @ApiPropertyOptional({ type: String })
  notes?: string = undefined;

  @ApiPropertyOptional({ type: Date })
  licenseED?: Date = undefined;

  @ApiPropertyOptional({ type: Date })
  keurED?: Date = undefined;

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
