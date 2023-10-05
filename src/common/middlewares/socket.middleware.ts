import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request } from 'express';
import { CalcSocketIoAdapter } from 'src/grading-calculator/websocket.adapter';

export class SocketMiddleware implements NestMiddleware {
  use(req: Request, socket: CalcSocketIoAdapter, next: NextFunction) {
   // Access the request details (e.g., req.headers, req.params, etc.)
   const origin = req.headers.origin;
   const userId = req.params.userId;
    console.log(origin)
   // Access the Socket.IO adapter
   const io = socket.createIOServer(Number(origin));

   // Perform operations based on the request and WebSocket connection
   // For example, you could emit a message to the connected socket:
   io.to(userId).emit('message', 'Hello User!');

   // Call the next middleware or route handler
   next();
  }
}
