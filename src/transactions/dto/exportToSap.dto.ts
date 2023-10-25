import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean } from 'class-validator';

export class ExportToSapDto {
  @ApiProperty({
    type: String,
    format: 'date',
    example: '21-08-2023',
  })
  @Transform(({ value }) => {
    const parts = String(value).split('-');
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]); // Parse as integer
    const year = parseInt(parts[2]);
    const hour = 7;
    const inputDate = new Date(Date.UTC(year, month - 1, day, hour));

    return inputDate;
  })
  date: string;

  @ApiProperty({ type: String, default: null })
  id_ba?: string;
  @ApiProperty({ type: Boolean }) @IsBoolean() useXml: boolean;
}
