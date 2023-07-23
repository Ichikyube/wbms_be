import { Module } from '@nestjs/common';
import { AccessZoneController } from './access-zone.controller';
import { AccessZoneService } from './access-zone.service';

@Module({
  controllers: [AccessZoneController],
  providers: [AccessZoneService]
})
export class AccessZoneModule {}
