import { RolePermission } from './role_permission';
import { ApiProperty } from '@nestjs/swagger';

export class PermissionRelations {
  @ApiProperty({ type: () => RolePermission })
  role_permission: RolePermission = undefined;
}
