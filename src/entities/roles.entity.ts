import { RolePermissionEntity } from './role-permission.entity';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from './user.entity';

export class RoleEntity {
  @ApiProperty() id: number;
  @ApiProperty() name: string;
}
