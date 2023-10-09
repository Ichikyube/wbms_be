import { ApiProperty } from '@nestjs/swagger';
import { Company, CompanyType } from '@prisma/client';

export class CompanyEntity implements Company {
  @ApiProperty() id: string;
  @ApiProperty() persenPotngWajib: number;
  @ApiProperty() refType: number;
  @ApiProperty() refId: string  | null;
  @ApiProperty() type: CompanyType;
  @ApiProperty() codeSap: string  | null;
  @ApiProperty() name: string;
  @ApiProperty() shortName: string  | null;
  @ApiProperty() address: string  | null;
  @ApiProperty() addressExt: string  | null;
  @ApiProperty() postalCode: string  | null;
  @ApiProperty() country: string  | null;
  @ApiProperty() province: string  | null;
  @ApiProperty() city: string  | null;
  @ApiProperty() phone: string  | null;
  @ApiProperty() url: string  | null;

  @ApiProperty() contactName: string  | null;
  @ApiProperty() contactEmail: string  | null;
  @ApiProperty() contactPhone: string  | null;

  @ApiProperty() isMillOperator: boolean;
  @ApiProperty() isTransporter: boolean;
  @ApiProperty() isSiteOperator: boolean;
  @ApiProperty() isEstate: boolean;

  @ApiProperty() isDeleted: boolean;

  userCreated: string;
  userModified: string;
  dtCreated: Date;
  dtModified: Date;
}
