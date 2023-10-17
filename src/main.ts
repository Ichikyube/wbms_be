import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import cookieParser from 'cookie-parser';

import { AppModule } from './app.module';
import { DbService } from './db/db.service';
import SwaggerDocumentation from './settings/swagger.config';
import * as fs from 'fs';
import { AccessControl } from 'accesscontrol';
import { CalcSocketIoAdapter } from './grading-calculator/websocket.adapter';
import path from 'path';
// const grantsObject = JSON.parse(fs.readFileSync('./rbac-policy.json', 'utf8'));
// const ac = new AccessControl(grantsObject);
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000', 'http://192.168.1.122:3000'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true,
  });
  app.useWebSocketAdapter(new CalcSocketIoAdapter(app));
  app.use(cookieParser());
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false, // Jika ingin diblock data selain data di dto harus dirubah whitelist = true
      transform: true, // Jika true, maka DataIn akan di transform sesuai dengan deklarinnya, tidak perlu menggunakan ParseXXXPipe
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const config = app.get(ConfigService);
  await printEnvVar(config);
  const prismaService = app.get(DbService);
  await prismaService.enableShutdownHooks(app);
  const swaggerDoc = new SwaggerDocumentation(app);
  swaggerDoc.serve();
  const WBMS_APP_PORT = config.get('WBMS_APP.PORT');
  await app.listen(WBMS_APP_PORT || 6001);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();

const printEnvVar = (config) => {
  const WBMS_APP_DOMAIN = config.get('WBMS_APP.DOMAIN');
  const WBMS_APP_PORT = config.get('WBMS_APP.PORT');

  const WBMS_DB_DOMAIN = config.get('WBMS_DB_DOMAIN');
  const WBMS_DB_PORT = config.get('WBMS_DB_PORT');

  const WBMS_DB_USER = config.get('WBMS_DB_USER');
  const WBMS_DB_PASSWORD = config.get('WBMS_DB_PASSWORD');
  const WBMS_DB_NAME = config.get('WBMS_DB_NAME');
  const WBMS_DB_URL = config.get('WBMS_DB_URL');

  const WBMS_SITE_TYPE = config.get('WBMS_SITE.TYPE');

  const WBMS_WB_IP = config.get('WBMS_WB.IP');
  const WBMS_WB_PORT = config.get('WBMS_WB.PORT');
  const WBMS_WB_MIN_WEIGHT = config.get('WBMS_WB.MIN_WEIGHT');
  const WBMS_WB_STABLE_PERIOD = config.get('WBMS_WB.STABLE_PERIOD');

  const WBMS_SEMAI_API_URL = config.get('WBMS_SEMAI.API_URL');
  const WBMS_SEMAI_API_KEY = config.get('WBMS_SEMAI_API_KEY');

  console.log(`WBMS_APP_DOMAIN: ${WBMS_APP_DOMAIN}`);
  console.log(`WBMS_APP_PORT: ${WBMS_APP_PORT}`);
  console.log('==============');
  console.log(`WBMS_DB_DOMAIN: ${WBMS_DB_DOMAIN}`);
  console.log(`WBMS_DB_PORT: ${WBMS_DB_PORT}`);
  console.log(`WBMS_DB_USER: ${WBMS_DB_USER}`);
  console.log(`WBMS_DB_PASSWORD: ${WBMS_DB_PASSWORD}`);
  console.log(`WBMS_DB_NAME: ${WBMS_DB_NAME}`);
  console.log(`WBMS_DB_URL: ${WBMS_DB_URL}`);
  console.log('==============');
  console.log(`WBMS_SITE_TYPE: ${WBMS_SITE_TYPE}`);
  console.log('==============');
  console.log(`WBMS_WB_IP: ${WBMS_WB_IP}`);
  console.log(`WBMS_WB_PORT: ${WBMS_WB_PORT}`);
  console.log(`WBMS_WB_MIN_WEIGHT: ${WBMS_WB_MIN_WEIGHT}`);
  console.log(`WBMS_WB_STABLE_PERIOD: ${WBMS_WB_STABLE_PERIOD}`);
  console.log('==============');
  console.log(`WBMS_SEMAI_API_URL: ${WBMS_SEMAI_API_URL}`);
  console.log(`WBMS_SEMAI_API_KEY: ${WBMS_SEMAI_API_KEY}`);
};
