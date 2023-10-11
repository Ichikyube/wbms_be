import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsException,
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
      trxGradingTPPERSEN,
      trxGradingTKPERSEN,
      trxGradingSAMPAHPERSEN,
      trxGradingBLMPERSEN,
      trxGradingBMPERSEN,
      trxGradingPartenoPERSEN,
      trxGradingBrondolanPERSEN,
      trxGradingWajibPERSEN
    } = data;
    
    try {
      // Assuming this.gradingCalculator.hitungPotongan is a synchronous function
      const results = this.gradingCalculator.hitungPotongan(
        millCode,
        qtyTbs,
        weightnetto,
        trxGradingAIRPERSEN,
        trxGradingTPPERSEN,
        trxGradingTKPERSEN,
        trxGradingSAMPAHPERSEN,
        trxGradingBLMPERSEN,
        trxGradingBMPERSEN,
        trxGradingPartenoPERSEN,
        trxGradingBrondolanPERSEN,
        trxGradingWajibPERSEN
      );

      console.log(results);

      // Assuming this.server is your WebSocket server
      this.server.emit("result", results);

      return results; // Assuming you want to send the results back to the client
    } catch (error) {
      console.error('Error calculating potongan:', error);
      throw new WsException('Error calculating potongan'); // Adjust this error handling as needed
    }
  }

}
