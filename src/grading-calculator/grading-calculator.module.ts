// calculator.module.ts

import { Module } from '@nestjs/common';
import { GradingCalculatorGateway } from './grading-calculator.gateway';
import { CalcSocketIoAdapter } from './websocket.adapter'; // Import the custom adapter
import { GradingCalculatorService } from './grading-calculator.service';

@Module({
  imports: [CalcSocketIoAdapter],
  providers: [CalcSocketIoAdapter, GradingCalculatorGateway, GradingCalculatorService],
  exports: [GradingCalculatorGateway],
})
export class GradingCalculatorModule {}
