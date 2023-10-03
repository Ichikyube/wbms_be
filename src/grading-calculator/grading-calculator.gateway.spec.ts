import { Test, TestingModule } from '@nestjs/testing';
import { GradingCalculatorGateway } from './grading-calculator.gateway';

describe('GradingCalculatorGateway', () => {
  let gateway: GradingCalculatorGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GradingCalculatorGateway],
    }).compile();

    gateway = module.get<GradingCalculatorGateway>(GradingCalculatorGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
