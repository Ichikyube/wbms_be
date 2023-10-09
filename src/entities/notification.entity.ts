import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class Notification {
  id: string;
  @ApiProperty() message: string;
  @ApiProperty() sender?: string;
  @ApiProperty() photo?: string;
  @ApiProperty() target?:JSON;
  @ApiProperty() configRequestId?:string;
  @ApiProperty() isResponded:boolean;
  createdAt?: Date;
}
