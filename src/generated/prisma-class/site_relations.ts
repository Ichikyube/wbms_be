import { Company } from './company';
import { City } from './city';
import { StorageTank } from './storage_tank';
import { Weighbridge } from './weighbridge';
import { Mill } from './mill';
import { Config } from './config';
import { Transaction } from './transaction';
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';

export class SiteRelations {
  @ApiPropertyOptional({ type: () => Site })
  sourceSite?: Site = undefined;

  @ApiPropertyOptional({ type: () => Company })
  company?: Company = undefined;

  @ApiPropertyOptional({ type: () => City })
  city?: City = undefined;

  @ApiProperty({ isArray: true, type: () => StorageTank })
  storageTanks: StorageTank[] = undefined;

  @ApiProperty({ isArray: true, type: () => Weighbridge })
  weighbridges: Weighbridge[] = undefined;

  @ApiProperty({ isArray: true, type: () => Mill })
  mills: Mill[] = undefined;

  @ApiProperty({ isArray: true, type: () => Config })
  config: Config[] = undefined;

  @ApiProperty({ isArray: true, type: () => Site })
  destinationSites: Site[] = undefined;

  @ApiProperty({ isArray: true, type: () => Transaction })
  originSiteTransactions: Transaction[] = undefined;

  @ApiProperty({ isArray: true, type: () => Transaction })
  destinationSiteTransactions: Transaction[] = undefined;
}
