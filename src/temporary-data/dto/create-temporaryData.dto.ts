import { IsString, IsNotEmpty, IsJSON } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { JsonObject } from '@prisma/client/runtime/library';

export class CreateTemporaryDataDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly data: JsonObject;
}
