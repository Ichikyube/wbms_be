import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import { GradingCalculatorService } from './grading-calculator.service';
import { GradingCalculatorDto } from './dto/gradingCalc.dto';

@WebSocketGateway()
export class GradingCalculatorGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly gradingCalculator: GradingCalculatorService) {}

  // afterInit(server: any) {
  //   // throw new Error('Method not implemented.');
  // }
  // handleConnection(client: any, ...args: any[]) {
  //   throw new Error('Method not implemented.');
  // }
  @WebSocketServer()
  server: Server;

  handleConnection(@ConnectedSocket() client: Socket) {
    console.log('CONNECT');
  }

  handleDisconnect(@ConnectedSocket() client: Socket) {
    console.log('DISCONNECT');
  }

  @SubscribeMessage('hitungPotongan')
  hitungPotongan(@MessageBody() data: GradingCalculatorDto): any {
    const {
      millCode,
      qtyTbs,
      weightnetto,
      trxGradingAIRPERSEN,
      trxGradingTPPesen,
      trxGradingTKPesen,
      trxGradingSAMPAHPERSEN,
      trxGradingBLMPERSEN,
      trxGradingBMPERSEN,
      trxGradingPartenoPERSEN,
      trxGradingBrondolanPERSEN,
    } = data;
    console.log(data);
    const result = this.gradingCalculator.hitungPotongan(
      millCode,
      qtyTbs,
      weightnetto,
      trxGradingAIRPERSEN,
      trxGradingTPPesen,
      trxGradingTKPesen,
      trxGradingSAMPAHPERSEN,
      trxGradingBLMPERSEN,
      trxGradingBMPERSEN,
      trxGradingPartenoPERSEN,
      trxGradingBrondolanPERSEN,
    );
    this.server.emit("result", result)
  }
}
