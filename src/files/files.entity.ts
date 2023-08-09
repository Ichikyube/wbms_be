import { ApiProperty } from '@nestjs/swagger';

export class ImageEntity {
  @ApiProperty({ type: String })
  path: string;
}
