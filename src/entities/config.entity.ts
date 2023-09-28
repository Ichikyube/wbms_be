import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { SiteEntity } from './site.entity';

export class Config {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  description: string;

  @ApiProperty({ type: Number })
  lvlOfApprvl: number;

  @ApiProperty({ type: Boolean })
  isDeleted: boolean;

  @ApiProperty({ type: String })
  userCreated: string;

  @ApiProperty({ type: String })
  userModified: string;

  @ApiProperty({ type: Date })
  dtCreated: Date;

  @ApiProperty({ type: Date })
  dtModified: Date;
}
