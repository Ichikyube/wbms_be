import { Product } from './product';
import { Company } from './company';
import { Driver } from './driver';
import { Site } from './site';
import { StorageTank } from './storage_tank';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class TransactionRelations {
  @ApiPropertyOptional({ type: () => Product })
  product?: Product = undefined;

  @ApiPropertyOptional({ type: () => Company })
  transporter?: Company = undefined;

  @ApiPropertyOptional({ type: () => Driver })
  driver?: Driver = undefined;

  @ApiPropertyOptional({ type: () => Site })
  originSite?: Site = undefined;

  @ApiPropertyOptional({ type: () => Site })
  destinationSite?: Site = undefined;

  @ApiPropertyOptional({ type: () => StorageTank })
  originSourceStorageTank?: StorageTank = undefined;

  @ApiPropertyOptional({ type: () => StorageTank })
  destinationSinkStorageTank?: StorageTank = undefined;
}
