import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { TradingCalculatorService } from './trading-calculator.service';
import { CreateTradingCalculatorDto } from './dto/create-trading-calculator.dto';
import { UpdateTradingCalculatorDto } from './dto/update-trading-calculator.dto';

@WebSocketGateway()
export class TradingCalculatorGateway {
  constructor(private readonly tradingCalculatorService: TradingCalculatorService) {}

  @SubscribeMessage('createTradingCalculator')
  create(@MessageBody() createTradingCalculatorDto: CreateTradingCalculatorDto) {
    return this.tradingCalculatorService.create(createTradingCalculatorDto);
  }

  @SubscribeMessage('findAllTradingCalculator')
  findAll() {
    return this.tradingCalculatorService.findAll();
  }

  @SubscribeMessage('findOneTradingCalculator')
  findOne(@MessageBody() id: number) {
    return this.tradingCalculatorService.findOne(id);
  }

  @SubscribeMessage('updateTradingCalculator')
  update(@MessageBody() updateTradingCalculatorDto: UpdateTradingCalculatorDto) {
    return this.tradingCalculatorService.update(updateTradingCalculatorDto.id, updateTradingCalculatorDto);
  }

  @SubscribeMessage('removeTradingCalculator')
  remove(@MessageBody() id: number) {
    return this.tradingCalculatorService.remove(id);
  }
}
