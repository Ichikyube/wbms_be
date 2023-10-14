import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProductDto {
  @ApiProperty() id: string;

  @ApiProperty() refType: number;
  @ApiProperty() refId: string;

  @ApiProperty() productGroupName?: string;

  @ApiProperty({ required: false }) @IsString() @IsOptional() code?: string;
  @ApiProperty() @IsString() @IsNotEmpty() name: string;
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  shortName?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description?: string;
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  certification?: string;
}
