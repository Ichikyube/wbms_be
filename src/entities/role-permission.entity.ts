import { PermissionEntity } from './permission.entity';
import { RoleEntity } from './roles.entity';

export class RolePermissionEntity {
  id: number;
  roleId: number | null;
  role?: RoleEntity | null;
  permission?: PermissionEntity[];
  userModified: string;
  dtModified: Date;
}
