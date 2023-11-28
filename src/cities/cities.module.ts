import { Module } from '@nestjs/common';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { SseService } from 'src/sse/sse.service';

@Module({
  controllers: [CitiesController],
  providers: [CitiesService, SseService],
})
export class CitiesModule {}
