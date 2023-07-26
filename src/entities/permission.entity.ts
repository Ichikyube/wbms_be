import { Action, Possession } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { RolePermissionEntity } from './role-permission.entity';

export class PermissionEntity {

  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ enum: Action, enumName: 'Action' })
  action: Action;

  @ApiProperty({ enum: Possession, enumName: 'Possession' })
  possesion: Possession;

  @ApiProperty({ type: String })
  attributes: string;

  @ApiProperty({ type: Number })
  role_permission_id: number;

  role_permission?: RolePermissionEntity ;
  userCreated: string ;
  userModified: string ;
  dtCreated: Date ;
  dtModified: Date ;
}
