import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Product {
  @ApiProperty({ type: String })
  id: string = undefined;

  @ApiProperty({ type: Number })
  refType: number = undefined;

  @ApiPropertyOptional({ type: String })
  refId?: string = undefined;

  @ApiPropertyOptional({ type: String })
  productGroupName?: string = undefined;

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

  @ApiPropertyOptional({ type: String })
  certification?: string = undefined;

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
