import { ApiProperty } from '@nestjs/swagger';
import { JsonObject, JsonValue } from '@prisma/client/runtime/library';

export class RoleEntity {
  @ApiProperty() id?: number;
  @ApiProperty() name: string;
  @ApiProperty() description: string;
  permissions?: JsonValue;
}
