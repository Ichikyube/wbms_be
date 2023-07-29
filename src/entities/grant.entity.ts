import { ApiProperty } from '@nestjs/swagger';

export class GrantEntity {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty() //{ enum: Action, enumName: 'Action' }
  action: string;

  @ApiProperty() //{ enum: Possession, enumName: 'Possession' }
  possesion: string;

  @ApiProperty({ type: String })
  attributes: string;
}
