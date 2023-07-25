import { UserEntity } from 'src/users/entities';
import { RolePermissionEntity } from '../../role-permission/entities/role-permission.entity';
import { ApiProperty } from '@nestjs/swagger';

export class RoleEntity {
  @ApiProperty() id: number;
  @ApiProperty() name: string;
  @ApiProperty() description: string;
  RolePermission?: RolePermissionEntity[];
  userCreated?: string;
  userModified?: string;
  dtCreated?: Date;
  dtModified?: Date;
  users?: UserEntity[];
}
