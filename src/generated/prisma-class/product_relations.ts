import { StorageTank } from './storage_tank';
import { Transaction } from './transaction';
import { TransportVehicle } from './transport_vehicle';
import { ApiProperty } from '@nestjs/swagger';

export class ProductRelations {
  @ApiProperty({ isArray: true, type: () => StorageTank })
  storageTanks: StorageTank[] = undefined;

  @ApiProperty({ isArray: true, type: () => Transaction })
  transactions: Transaction[] = undefined;

  @ApiProperty({ isArray: true, type: () => TransportVehicle })
  transportVehicles: TransportVehicle[] = undefined;
}
