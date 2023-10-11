import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient } from 'redis';
import { RedisService } from './redis.service';
import { redisStore } from 'cache-manager-redis-store';

@Module({
  // import: [
  //   CacheModule.registerAsync({
  //     useFactory: async (configService: ConfigService) => ({
  //       store: await redisStore({
  //         url: configService.get('REDIS_URI'),
  //         ttl: 5000,
  //       }),
  //     }),
  //     isGlobal: true,
  //     inject: [ConfigService],
  //   }),
  // ],
  providers: [
    {
      provide: 'REDIS_OPTIONS',
      useValue: {
        url: 'redis://localhost:6379',
      },
    },
    {
      inject: ['REDIS_OPTIONS'],
      provide: 'REDIS_CLIENT',
      useFactory: async (options: { url: string }) => {
        const client = createClient(options);
        await client.connect();
        return client;
      },
    },
    RedisService,
  ],
  exports: ['REDIS_CLIENT'],
})
export class RedisModule {}
