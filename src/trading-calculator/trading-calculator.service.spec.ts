import { Test, TestingModule } from '@nestjs/testing';
import { TradingCalculatorService } from './trading-calculator.service';

describe('TradingCalculatorService', () => {
  let service: TradingCalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TradingCalculatorService],
    }).compile();

    service = module.get<TradingCalculatorService>(TradingCalculatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
