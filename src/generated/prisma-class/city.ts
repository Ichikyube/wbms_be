import { ApiProperty } from '@nestjs/swagger';

export class City {
  @ApiProperty({ type: String })
  id: string = undefined;

  @ApiProperty({ type: String })
  provinceId: string = undefined;

  @ApiProperty({ type: String })
  name: string = undefined;

  @ApiProperty({ type: Boolean })
  isDeleted: boolean = undefined;

  @ApiProperty({ type: String })
  userCreated: string = undefined;

  @ApiProperty({ type: String })
  userModified: string = undefined;

  @ApiProperty({ type: Date })
  dtCreated: Date = undefined;

  @ApiProperty({ type: Date })
  dtModified: Date = undefined;
}
