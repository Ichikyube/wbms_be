import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateWeighbridgeDto {
  @ApiProperty() @IsUUID() @IsNotEmpty() siteId: string;

  @ApiProperty() @IsString() @IsNotEmpty() codeSap: string;
  @ApiProperty() @IsString() @IsNotEmpty() name: string;
}
