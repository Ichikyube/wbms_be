import { ApiProperty } from '@nestjs/swagger';
export class RolePermissionEntity {
  @ApiProperty({ type: Number })
  id: number;
  @ApiProperty({ type: String })
  resource: string;
  @ApiProperty({ type: Number })
  roleId: number;

}
