import { ApiProperty } from '@nestjs/swagger';

export class RoleEntity {
  @ApiProperty() id: number;
  @ApiProperty() name: string;
}
