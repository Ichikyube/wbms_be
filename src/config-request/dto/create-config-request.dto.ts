import { RequestStatus } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import moment from 'moment';

export class CreateConfigRequestDto {
  @ApiProperty({ enum: RequestStatus })
  status: string;
  @ApiProperty({
    type: String,
    format: 'date-time', // Use the appropriate format for your date field
    example: '2023-09-08T10:00:00Z', // Provide an example date in the expected format
    description: 'The start time of the Request.', // Describe the field
  })
  @Transform(({ value }) => moment(value).format('YYYY-MM-DD[T]HH:mm'))
  schedule: Date;

  @ApiProperty() configId: number;
}
