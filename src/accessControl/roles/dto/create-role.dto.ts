import { ApiProperty } from '@nestjs/swagger';
import { RolePermissionEntity } from 'src/entities/role-permission.entity';

export class CreateRoleDto {
  @ApiProperty({ type: String })
  name: string;
  permissions?: RolePermissionEntity[];
}
