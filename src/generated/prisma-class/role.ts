import { ApiProperty } from '@nestjs/swagger';

export class Role {
  @ApiProperty({ type: Number })
  id: number = undefined;

  @ApiProperty({ type: String })
  name: string = undefined;

  @ApiProperty({ type: String })
  description: string = undefined;

  @ApiProperty({ type: String })
  userCreated: string = undefined;

  @ApiProperty({ type: String })
  userModified: string = undefined;

  @ApiProperty({ type: Date })
  dtCreated: Date = undefined;

  @ApiProperty({ type: Date })
  dtModified: Date = undefined;
}
