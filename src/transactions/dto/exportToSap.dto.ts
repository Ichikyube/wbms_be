import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';
import { isString } from 'lodash';
import moment from 'moment';

export class ExportToSapDto {
  @ApiProperty({
    type: 'string',
    format: 'date',
    example: '23-08-2023',
  })
  // @IsDate()
  // @Transform(({value}) => moment(value, 'DD-MM-YYYY').toDate())
  date: string;

  @ApiProperty()
  id_ba: string;
}
