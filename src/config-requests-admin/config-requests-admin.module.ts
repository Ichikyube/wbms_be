import { Module } from '@nestjs/common';
import { ConfigRequestsAdminService } from './config-requests-admin.service';
import { ConfigRequestsAdminController } from './config-requests-admin.controller';

@Module({
  controllers: [ConfigRequestsAdminController],
  providers: [ConfigRequestsAdminService],
})
export class ConfigRequestsAdminModule {}
