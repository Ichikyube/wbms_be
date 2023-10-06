import { PartialType } from '@nestjs/mapped-types';
import { CreateTradingCalculatorDto } from './create-trading-calculator.dto';

export class UpdateTradingCalculatorDto extends PartialType(CreateTradingCalculatorDto) {
  id: number;
}
