import { ApiProperty } from '@nestjs/swagger';
import { RolePermissionEntity } from './role-permission.entity';

export class PermissionEntity {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty() //{ enum: Action, enumName: 'Action' }
  action: string;

  @ApiProperty() //{ enum: Possession, enumName: 'Possession' }
  possesion: string;

  @ApiProperty({ type: String })
  attributes: string;

  @ApiProperty({ type: Number })
  role_permission_id: number;
  role_permission?: RolePermissionEntity;
  
  userCreated?: string;
  userModified?: string;
  dtCreated: Date;
  dtModified?: Date;
}

// export class PermissionEntity {
//   id: string ;
// action: Action ;
// possesion: Possession ;
// attributes: string ;
// role_permission_id: number ;
// role_permission?: RolePermissionEntity ;
// userCreated: string ;
// userModified: string ;
// dtCreated: Date ;
// dtModified: Date ;
// }
