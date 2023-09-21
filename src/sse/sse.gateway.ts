// import { Injectable } from '@nestjs/common';
// import {
//   WebSocketGateway,
//   SubscribeMessage,
//   MessageBody,
//   OnGatewayConnection,
//   OnGatewayDisconnect,
//   WebSocketServer,
// } from '@nestjs/websockets';
// import { Observable, from } from 'rxjs';
// import { Server } from 'socket.io';

// @WebSocketGateway()
// @Injectable()
// export class SseGateway implements OnGatewayConnection, OnGatewayDisconnect {
//   @WebSocketServer()
//   server: Server;
  
//   // Method to send SSE messages to connected clients
//   sendEventToClients(event: string, data: any) {
//     const eventData = JSON.stringify(data);
//     this.server.emit(event, eventData);
//   }

//   // Method to listen for events and return an Observable
//   onEvent(event: string): Observable<any> {
//     return from(new Promise((resolve) => {
//       this.server.on(event, (data: string) => {
//         resolve(data);
//       });
//     }));
//   }
//   handleConnection(client: any, ...args: any[]) {
//     console.log(`Client connected: ${client.id}`);
//   }

//   handleDisconnect(client: any) {
//     console.log(`Client disconnected: ${client.id}`);
//   }

//   emitUpdateToClients(data: any) {
//     this.server.emit('update', data);
//   }
// }
