import { Customer } from './customer';
import { ApiProperty } from '@nestjs/swagger';

export class CustomerTypeRelations {
  @ApiProperty({ isArray: true, type: () => Customer })
  customers: Customer[] = undefined;
}
