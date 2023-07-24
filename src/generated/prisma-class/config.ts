import { ApiProperty } from '@nestjs/swagger';

export class Config {
  @ApiProperty({ type: String })
  id: string = undefined;

  @ApiProperty({ type: Number })
  minWeight: number = undefined;

  @ApiProperty({ type: String })
  imageFolder: string = undefined;

  @ApiProperty({ type: String })
  fileFolder: string = undefined;

  @ApiProperty({ type: String })
  millHeadCode: string = undefined;

  @ApiProperty({ type: String })
  millHeadName: string = undefined;

  @ApiProperty({ type: String })
  approval1: string = undefined;

  @ApiProperty({ type: String })
  approval2: string = undefined;

  @ApiProperty({ type: String })
  notes: string = undefined;

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
