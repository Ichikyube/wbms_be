import { Module } from '@nestjs/common';
import { TradingCalculatorService } from './trading-calculator.service';
import { TradingCalculatorGateway } from './trading-calculator.gateway';

@Module({
  providers: [TradingCalculatorGateway, TradingCalculatorService],
})
export class TradingCalculatorModule {}
