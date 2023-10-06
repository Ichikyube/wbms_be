import { Test, TestingModule } from '@nestjs/testing';
import { GradingCalculatorService } from './grading-calculator.service';

describe('GradingCalculatorService', () => {
  let service: GradingCalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GradingCalculatorService],
    }).compile();

    service = module.get<GradingCalculatorService>(GradingCalculatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
