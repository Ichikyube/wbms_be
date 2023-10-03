import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class GradingCalculatorGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('calculate')
  handleCalculate(client: any, expression: string): void {
    try {
      const result = eval(expression);
      this.server.emit('result', result);
    } catch (error) {
      this.server.emit('result', 'Error');
    }
  }
}
