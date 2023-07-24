import { Province } from './province';
import { Site } from './site';
import { Customer } from './customer';
import { ApiProperty } from '@nestjs/swagger';

export class CityRelations {
  @ApiProperty({ type: () => Province })
  province: Province = undefined;

  @ApiProperty({ isArray: true, type: () => Site })
  sites: Site[] = undefined;

  @ApiProperty({ isArray: true, type: () => Customer })
  customers: Customer[] = undefined;
}
