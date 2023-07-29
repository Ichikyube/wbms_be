import { ApiProperty } from '@nestjs/swagger';

export class PermissionEntity {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty() //{ enum: Action, enumName: 'Action' }
  action: string;

  @ApiProperty() //{ enum: Possession, enumName: 'Possession' }
  possesion: string;

  @ApiProperty({ type: String })
  attributes: string;

  // @ApiProperty({ type: String })
  // role_permission_id: string;
  
}
