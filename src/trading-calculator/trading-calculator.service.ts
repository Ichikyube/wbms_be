import { Injectable } from '@nestjs/common';
import { CreateTradingCalculatorDto } from './dto/create-trading-calculator.dto';
import { UpdateTradingCalculatorDto } from './dto/update-trading-calculator.dto';

@Injectable()
export class TradingCalculatorService {
  create(createTradingCalculatorDto: CreateTradingCalculatorDto) {
    return 'This action adds a new tradingCalculator';
  }

  findAll() {
    return `This action returns all tradingCalculator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tradingCalculator`;
  }

  update(id: number, updateTradingCalculatorDto: UpdateTradingCalculatorDto) {
    return `This action updates a #${id} tradingCalculator`;
  }

  remove(id: number) {
    return `This action removes a #${id} tradingCalculator`;
  }
}
