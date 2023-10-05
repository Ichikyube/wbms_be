import { CorsOptions, CorsOptionsDelegate } from '@nestjs/common/interfaces/external/cors-options.interface';
import { IoAdapter } from '@nestjs/platform-socket.io';
import cors from 'cors';
import { Server } from 'socket.io';

export class CalcSocketIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: any): any {
    const server: Server = super.createIOServer(port, options);
    // server.use(cors(corsOptionsDelegateAsync));
    server.use(() => {
      cors(corsOptionsDelegateAsync);
    });
    return server;
  }
}
var whitelist = ['http://localhost:3000', 'http://192.168.1.122:3000'];
async function corsOptionsDelegateAsync(req: cors.CorsRequest): Promise<CorsOptions> {
  var corsOptions: CorsOptions;
  if (whitelist.indexOf(req.headers.origin) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  return corsOptions;
}
// function corsOptionsDelegate(req: cors.CorsRequest, callback: (error: Error | null, options?: CorsOptions) => void): void {
//   var whitelist = ['http://localhost:3000', 'http://192.168.1.122:3000'];
//   var corsOptions: CorsOptions;
//   if (whitelist.indexOf(req.headers.origin) !== -1) {
//     corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
//   } else {
//     corsOptions = { origin: false }; // disable CORS for this request
//   }
//   callback(null, corsOptions);
// }