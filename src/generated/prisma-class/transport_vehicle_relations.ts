import { Company } from './company';
import { Product } from './product';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class TransportVehicleRelations {
  @ApiPropertyOptional({ type: () => Company })
  company?: Company = undefined;

  @ApiPropertyOptional({ type: () => Product })
  product?: Product = undefined;
}
