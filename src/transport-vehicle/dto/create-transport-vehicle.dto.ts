import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsUUID,
  IsOptional,
  IsInt,
  IsDate,
  IsDateString,
  IsNumber,
} from 'class-validator';

export class CreateTransportVehicleDto {
  @ApiProperty() @IsUUID() @IsNotEmpty() companyId?: string;
  @ApiProperty({ required: false })
  @IsUUID()
  @IsOptional()
  companyRefId?: string;
  @ApiProperty() @IsString() @IsNotEmpty() companyName: string;
  @ApiProperty({ required: false }) @IsString() @IsOptional() code: string;
  @ApiProperty() @IsUUID() @IsNotEmpty() productId: string;
  @ApiProperty({ required: false })
  @IsUUID()
  @IsOptional()
  productRefId?: string;
  @ApiProperty() @IsString() @IsNotEmpty() productName: string;

  @ApiProperty() @IsString() @IsNotEmpty() plateNo: string;
  @ApiProperty({ required: false }) @IsNumber() @IsOptional() capacity?: number;
  @ApiProperty({ required: false }) @IsString() @IsOptional() brand?: string;
  @ApiProperty({ required: false }) @IsString() @IsOptional() model?: string;
  @ApiProperty({ required: false }) @IsInt() @IsNotEmpty() sccModel: number;
  @ApiProperty({ required: false }) @IsString() @IsOptional() notes?: string;

  @ApiProperty({ required: false }) @IsOptional() licenseED?: Date;
  @ApiProperty({ required: false }) @IsOptional() keurED?: Date;
}
