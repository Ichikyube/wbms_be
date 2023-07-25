import { Prisma } from '@prisma/client';
import { RolePermissionEntity } from '../../role-permission/entities/role-permission.entity';

export class PermissionEntity {
  id: number;
  resource_id: string;
  actions: Prisma.JsonValue;
  attributes: string;
  possesion: string;
  role: string;
  role_permission_id: number;
  role_permission?: RolePermissionEntity;
  userCreated: string;
  userModified: string;
  dtCreated: Date;
  dtModified: Date;
}
