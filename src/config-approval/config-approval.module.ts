import { Module } from '@nestjs/common';
import { ConfigApprovalService } from './config-approval.service';
import { ConfigApprovalController } from './config-approval.controller';

@Module({
  controllers: [ConfigApprovalController],
  providers: [ConfigApprovalService],
})
export class ConfigApprovalModule {}
