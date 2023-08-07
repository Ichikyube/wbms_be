import { Module } from '@nestjs/common';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { SseGateway } from 'src/sse/sse.gateway';

@Module({
  controllers: [CitiesController],
  providers: [SseGateway, CitiesService],
})
export class CitiesModule {}
