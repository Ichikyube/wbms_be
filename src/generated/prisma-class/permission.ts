import { ApiProperty } from '@nestjs/swagger';

export class Permission {
  @ApiProperty({ type: Number })
  id: number = undefined;

  @ApiProperty({ type: String })
  resource_id: string = undefined;

  @ApiProperty({ type: Object })
  actions: object = undefined;

  @ApiProperty({ type: String })
  attributes: string = undefined;

  @ApiProperty({ type: String })
  possesion: string = undefined;

  @ApiProperty({ type: String })
  role: string = undefined;

  @ApiProperty({ type: Number })
  role_permission_id: number = undefined;

  @ApiProperty({ type: String })
  userCreated: string = undefined;

  @ApiProperty({ type: String })
  userModified: string = undefined;

  @ApiProperty({ type: Date })
  dtCreated: Date = undefined;

  @ApiProperty({ type: Date })
  dtModified: Date = undefined;
}
