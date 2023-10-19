import { ApiProperty } from '@nestjs/swagger';
import { JsonValue } from '@prisma/client/runtime/library';
import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateNotificationDto {
  @ApiProperty() @IsString() @IsNotEmpty() message: string;

  @ApiProperty() @IsString() photo?: string;
  @ApiProperty() @IsString() sender?: string;
  @ApiProperty()
  target?: JsonValue;
  @ApiProperty() @IsNumber() configRequestId?: string;
}
