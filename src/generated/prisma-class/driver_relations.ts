import { Company } from './company';
import { Transaction } from './transaction';
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';

export class DriverRelations {
  @ApiPropertyOptional({ type: () => Company })
  company?: Company = undefined;

  @ApiProperty({ isArray: true, type: () => Transaction })
  transactions: Transaction[] = undefined;
}
