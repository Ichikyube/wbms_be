import { Module } from '@nestjs/common';
import { ConfigRequestService } from './config-request.service';
import { ConfigRequestController } from './config-request.controller';

@Module({
  controllers: [ConfigRequestController],
  providers: [ConfigRequestService],
})
export class ConfigRequestModule {}
