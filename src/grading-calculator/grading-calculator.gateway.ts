import {
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { hitungAIRPERSEN } from 'src/transactions/gradingCalculator/hitungAIRPERSEN';
import { hitungBLMPERSEN } from 'src/transactions/gradingCalculator/hitungBLMPERSEN';
import { hitungBMPERSEN } from 'src/transactions/gradingCalculator/hitungBMPERSEN';
import { hitungBrondolanPERSEN } from 'src/transactions/gradingCalculator/hitungBrondolanPERSEN';
import { hitungLAINNYAPERSEN } from 'src/transactions/gradingCalculator/hitungLAINNYAPERSEN';
import { hitungPartenoPERSEN } from 'src/transactions/gradingCalculator/hitungPartenoPERSEN';
import { hitungSAMPAHPERSEN } from 'src/transactions/gradingCalculator/hitungSAMPAHPERSEN';
import { hitungTandanKosongPERSEN } from 'src/transactions/gradingCalculator/hitungTKPERSEN';
import { hitungTPPERSEN } from 'src/transactions/gradingCalculator/hitungTPPERSEN';
import { hitungWAJIBPERSEN } from 'src/transactions/gradingCalculator/hitungWAJIBPERSEN';

@WebSocketGateway()
export class GradingCalculatorGateway implements OnGatewayConnection {
  // handleConnection(client: any, ...args: any[]) {
  //   throw new Error('Method not implemented.');
  // }
  @WebSocketServer()
  server: Server;

  handleConnection(@ConnectedSocket() client: Socket) {
    console.log('ya');
    this.server.emit(
      'calculateWater',
      'This is a response from the server over WebSocket',
    );
  }

  // handleDisconnect(@ConnectedSocket() client: Socket) {
  //   // Handle disconnection event
  // }
  // @SubscribeMessage('calculateWater')
  hitungPotonganAir(@ConnectedSocket() client: Socket): any {
    console.log('aiiiiir');
    this.server.emit(
      'calculateWater',
      'This is a response from the server over WebSocket',
    );
    return 'nana potongan';
  }

  // @SubscribeMessage('calculateTrash')
  // hitungpotonganSampah(client: any): void {
  //   try {
  //     const result = hitungSAMPAHPERSEN(client, client, client, client);
  //     this.server.emit('result', result);
  //   } catch (error) {
  //     this.server.emit('result', 'Error');
  //   }
  // }
  // @SubscribeMessage('calculateBLM')
  // hitungpotonganBLM(client: any): void {
  //   try {
  //     const result = hitungBLMPERSEN(
  //       client,
  //       client,
  //       client,
  //       client,
  //       client,
  //       client,
  //     );
  //     this.server.emit('result', result);
  //   } catch (error) {
  //     this.server.emit('result', 'Error');
  //   }
  // }

  // @SubscribeMessage('calculateBM')
  // hitungpotonganBM(client: any): void {
  //   try {
  //     const result = hitungBMPERSEN(client, client, client, client, client);
  //     this.server.emit('result', result);
  //   } catch (error) {
  //     this.server.emit('result', 'Error');
  //   }
  // }

  // @SubscribeMessage('calculateTP')
  // hitungpotonganTP(client: any): void {
  //   try {
  //     const result = hitungTPPERSEN(client, client, client, client, client);
  //     this.server.emit('result', result);
  //   } catch (error) {
  //     this.server.emit('result', 'Error');
  //   }
  // }

  // @SubscribeMessage('calculateTK')
  // hitungpotonganTK(client: any): void {
  //   try {
  //     const result = hitungTandanKosongPERSEN(client, client, client);
  //     this.server.emit('result', result);
  //   } catch (error) {
  //     this.server.emit('result', 'Error');
  //   }
  // }

  // @SubscribeMessage('calculateParteno')
  // hitungpotonganParteno(client: any): void {
  //   try {
  //     const result = hitungPartenoPERSEN(client, client, client, '');
  //     this.server.emit('result', result);
  //   } catch (error) {
  //     this.server.emit('result', 'Error');
  //   }
  // }

  // @SubscribeMessage('calculateBrondolan')
  // hitungpotonganBrondolan(client: any): void {
  //   try {
  //     const result = hitungBrondolanPERSEN(client, client, client);
  //     this.server.emit('result', result);
  //   } catch (error) {
  //     this.server.emit('result', 'Error');
  //   }
  // }

  // @SubscribeMessage('calculateOthers')
  // hitungPotonganLainnya(client: any): void {
  //   try {
  //     const result = hitungLAINNYAPERSEN(client, client, client, '');
  //     this.server.emit('result', result);
  //   } catch (error) {
  //     this.server.emit('result', 'Error');
  //   }
  // }

  // @SubscribeMessage('calculateObligatory')
  // hitungPotonganWajib(client: any): void {
  //   try {
  //     const result = hitungWAJIBPERSEN(client, client, client, '');
  //     this.server.emit('result', result);
  //   } catch (error) {
  //     this.server.emit('result', 'Error');
  //   }
  // }
}
