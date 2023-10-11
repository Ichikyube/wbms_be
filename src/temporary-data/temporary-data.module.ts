import { Module } from '@nestjs/common';
import { TemporaryDataController } from './temporary-Data.controller';
import { TemporaryDataService } from './temporary-data.service';

@Module({
  controllers: [TemporaryDataController],
  providers: [TemporaryDataService],
})
export class TemporaryDataModule {}
