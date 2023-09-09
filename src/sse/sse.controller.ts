import { Controller, Get, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('sse')
export class SseController {
  @Get()
  async stream(@Res() res: Response) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');

    const sendHeartbeat = () => {
      res.write(`data: Heartbeat\n\n`);
    };

    const intervalId = setInterval(sendHeartbeat, 5000);

    // Simulate sending real-time data
    for (let i = 0; i < 10; i++) {
      res.write(`data: Message ${i}\n\n`);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    res.on('close', () => {
      clearInterval(intervalId);
      res.end();
    });
  }
}
