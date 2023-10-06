import { Test, TestingModule } from '@nestjs/testing';
import { TradingCalculatorGateway } from './trading-calculator.gateway';
import { TradingCalculatorService } from './trading-calculator.service';

describe('TradingCalculatorGateway', () => {
  let gateway: TradingCalculatorGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TradingCalculatorGateway, TradingCalculatorService],
    }).compile();

    gateway = module.get<TradingCalculatorGateway>(TradingCalculatorGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
