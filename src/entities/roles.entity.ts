import { permission } from '../accessControl/roles/types/roles.type';
import { ApiProperty } from '@nestjs/swagger';
import { PermissionEntity } from './permission.entity';

export class RoleEntity {
  @ApiProperty() id: number;
  @ApiProperty() name: string;
}
