import { ApiProperty } from '@nestjs/swagger';
import { PermissionEntity } from './permission.entity';

export class RoleEntity {
  @ApiProperty() id?: string;
  @ApiProperty() name: string;
  permissions?: PermissionEntity[];
}
