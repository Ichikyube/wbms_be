import { RequestStatus, Status } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateConfigRequestDto {
  @ApiProperty({ enum: RequestStatus })
  status: string;
  @ApiProperty({
    type: String,
    format: 'date-time', // Use the appropriate format for your date field
    example: '2023-09-08T10:00:00Z', // Provide an example date in the expected format
    description: 'The start time of the Request.', // Describe the field
  })
  schedule: Date;

  @ApiProperty() configId: number;
}
