import { CustomerType } from './customer_type';
import { CustomerGroup } from './customer_group';
import { City } from './city';
import { ApiProperty } from '@nestjs/swagger';

export class CustomerRelations {
  @ApiProperty({ type: () => CustomerType })
  customerType: CustomerType = undefined;

  @ApiProperty({ type: () => CustomerGroup })
  customerGroup: CustomerGroup = undefined;

  @ApiProperty({ type: () => City })
  city: City = undefined;
}
