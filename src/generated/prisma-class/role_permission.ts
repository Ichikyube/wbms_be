import { ApiProperty } from '@nestjs/swagger';

export class RolePermission {
  @ApiProperty({ type: Number })
  id: number = undefined;

  @ApiProperty({ type: Number })
  roleId: number = undefined;

  @ApiProperty({ type: String })
  userModified: string = undefined;

  @ApiProperty({ type: Date })
  dtModified: Date = undefined;
}
