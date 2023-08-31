import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class Notification {
  id?: string;
  @ApiProperty() message: string;
  createdAt?: Date;
}
