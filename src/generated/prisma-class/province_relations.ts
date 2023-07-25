import { City } from './city';
import { ApiProperty } from '@nestjs/swagger';

export class ProvinceRelations {
  @ApiProperty({ isArray: true, type: () => City })
  cities: City[] = undefined;
}
