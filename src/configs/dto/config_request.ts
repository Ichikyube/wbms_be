import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ConfigRequest {
  @ApiProperty({ type: Number })
  id: number = undefined;

  @ApiProperty({ type: String })
  lvl1Aprrover: string = undefined;

  @ApiPropertyOptional({ type: String })
  lvl2Approver?: string = undefined;

  @ApiPropertyOptional({ type: String })
  lvl3Aprrover?: string = undefined;

  @ApiProperty({ type: String })
  lvl1Signed: string = undefined;

  @ApiPropertyOptional({ type: String })
  lvl2Signed?: string = undefined;

  @ApiPropertyOptional({ type: String })
  lvl3Signed?: string = undefined;

  @ApiProperty({ type: Number })
  configId: number = undefined;
}
