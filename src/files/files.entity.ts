import { ApiProperty } from '@nestjs/swagger';

export class ImageEntity {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  path: string;
  createdAt: Date ;
  updatedAt: Date ;
}
