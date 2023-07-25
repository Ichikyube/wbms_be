import { Site } from './site';
import { TransportVehicle } from './transport_vehicle';
import { Mill } from './mill';
import { Driver } from './driver';
import { Transaction } from './transaction';
import { StorageTank } from './storage_tank';
import { ApiProperty } from '@nestjs/swagger';

export class CompanyRelations {
  @ApiProperty({ isArray: true, type: () => Site })
  sites: Site[] = undefined;

  @ApiProperty({ isArray: true, type: () => TransportVehicle })
  transportVehicles: TransportVehicle[] = undefined;

  @ApiProperty({ isArray: true, type: () => Mill })
  mills: Mill[] = undefined;

  @ApiProperty({ isArray: true, type: () => Driver })
  Driver: Driver[] = undefined;

  @ApiProperty({ isArray: true, type: () => Transaction })
  Transaction: Transaction[] = undefined;

  @ApiProperty({ isArray: true, type: () => StorageTank })
  StorageTank: StorageTank[] = undefined;
}
