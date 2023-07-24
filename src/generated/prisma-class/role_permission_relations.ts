import { Role } from './role';
import { Permission } from './permission';
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';

export class RolePermissionRelations {
  @ApiPropertyOptional({ type: () => Role })
  role?: Role = undefined;

  @ApiProperty({ isArray: true, type: () => Permission })
  permission: Permission[] = undefined;
}
