import { ApiProperty } from '@nestjs/swagger';
import { PermissionEntity } from './permission.entity';

export class RoleEntity {
  @ApiProperty() id?: number;
  @ApiProperty() name: string;
  permissions?: PermissionEntity[];
}
