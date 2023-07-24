import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CustomerType {
  @ApiProperty({ type: String })
  id: string = undefined;

  @ApiProperty({ type: String })
  name: string = undefined;

  @ApiPropertyOptional({ type: String })
  shortDesc?: string = undefined;

  @ApiPropertyOptional({ type: String })
  description?: string = undefined;

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
