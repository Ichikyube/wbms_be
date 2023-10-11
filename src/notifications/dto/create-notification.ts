import { ApiProperty } from '@nestjs/swagger';
import { JsonValue } from '@prisma/client/runtime/library';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateNotificationDto {
  @ApiProperty() @IsString() @IsNotEmpty() message: string;

  @ApiProperty()
  target?: JsonValue;
}
