import { Site } from './site';
import { Company } from './company';
import { Product } from './product';
import { Transaction } from './transaction';
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';

export class StorageTankRelations {
  @ApiPropertyOptional({ type: () => Site })
  site?: Site = undefined;

  @ApiPropertyOptional({ type: () => Company })
  stockOwner?: Company = undefined;

  @ApiPropertyOptional({ type: () => Product })
  product?: Product = undefined;

  @ApiProperty({ isArray: true, type: () => Transaction })
  originSourceStorageTankTransactions: Transaction[] = undefined;

  @ApiProperty({ isArray: true, type: () => Transaction })
  destinationSinkStorageTankTransactions: Transaction[] = undefined;
}
