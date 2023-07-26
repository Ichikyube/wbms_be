import { ApiProperty } from '@nestjs/swagger';
export class RolePermissionEntity {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: Number })
  resource_id: number;

  @ApiProperty({ type: Number })
  roleId: number;

  userCreated: string;
  userModified: string;
  dtCreated: Date;
  dtModified: Date;
}
