import { ApiProperty } from '@nestjs/swagger';
import { Permission, Role } from '@prisma/client';
import { PermissionEntity } from './permission.entity';
import { RoleEntity } from './roles.entity';
export class RolePermissionEntity {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: Number })
  resource_id: number;
  Permission?: PermissionEntity[] ;
  @ApiProperty({ type: Number })
  roleId: number  | null;
  role?: RoleEntity  | null;
  userCreated?: string;
  userModified?: string;
  dtCreated: Date;
  dtModified?: Date;
}
