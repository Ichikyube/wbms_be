import { INestApplicationContext, WebSocketAdapter } from '@nestjs/common';
import {
  CorsOptions,
  CorsOptionsDelegate,
} from '@nestjs/common/interfaces/external/cors-options.interface';
import { IoAdapter } from '@nestjs/platform-socket.io';
import * as WebSocket from 'ws';
import { Server, ServerOptions  } from 'socket.io';

export class CalcSocketIoAdapter extends IoAdapter implements WebSocketAdapter {
  constructor(private app: INestApplicationContext) {
    super(app);
  }
  createIOServer(port: number, options?: ServerOptions): Server {
    const corsOptions: CorsOptions = {
      origin: ['http://localhost:3000', 'http://192.168.1.122:3000'],
      methods: ["GET", "POST"]
    };
    const serverOptions = { ...options, cors: corsOptions };
    const server: Server = super.createIOServer(port, serverOptions);
    const ws = new WebSocket.Server({
      noServer: true
    });
    server.on('upgrade', (request, socket, head) => {
      ws.handleUpgrade(request, socket, head, (webSocket) => {
        ws.emit('connection', webSocket, request);
      });
    });

    return server;
  }
}

// function corsOptionsDelegate (req: any, callback: (error: Error | null, options?: CorsOptions) => void): void {
//   const whitelist = ['http://localhost:3000', 'http://192.168.1.122:3000'];
//   const corsOptions: CorsOptions = { origin: false }; // Default to false

//   if (whitelist.indexOf(req.headers.origin) !== -1) {
//     corsOptions.origin = true; // Reflect the requested origin in the CORS response
//   }

//   callback (null, corsOptions);
// }
