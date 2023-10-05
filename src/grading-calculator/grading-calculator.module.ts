// calculator.module.ts

import { Module } from '@nestjs/common';
import { GradingCalculatorGateway } from './grading-calculator.gateway';
import { CalcSocketIoAdapter } from './websocket.adapter'; // Import the custom adapter

@Module({
  imports: [CalcSocketIoAdapter],
  providers: [GradingCalculatorGateway],
  exports: [GradingCalculatorGateway],
})
export class GradingCalculatorModule {}
