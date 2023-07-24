import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Driver {
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

  @ApiProperty({ type: String })
  nik: string = undefined;

  @ApiProperty({ type: String })
  name: string = undefined;

  @ApiPropertyOptional({ type: String })
  address?: string = undefined;

  @ApiPropertyOptional({ type: String })
  email?: string = undefined;

  @ApiPropertyOptional({ type: String })
  phone?: string = undefined;

  @ApiPropertyOptional({ type: String })
  licenseNo?: string = undefined;

  @ApiPropertyOptional({ type: Date })
  licenseED?: Date = undefined;

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
