"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
const app_module_1 = require("./app.module");
const db_service_1 = require("./db/db.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    printEnvVar();
    const config = new config_1.ConfigService();
    const WBMS_APP_PORT = config.get('WBMS_APP_PORT');
    app.enableCors({
        origin: ['http://localhost:3000', 'http://192.168.1.122:3000'],
        methods: ['GET', 'POST', 'PATCH', 'DELETE'],
        credentials: true,
    });
    app.use(cookieParser());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: false,
        transform: true,
        forbidNonWhitelisted: true,
    }));
    const prismaService = app.get(db_service_1.DbService);
    await prismaService.enableShutdownHooks(app);
    const configSwagger = new swagger_1.DocumentBuilder()
        .setTitle('Weighbridge Management System')
        .setDescription('Weighbridge Management System API Documentation')
        .setVersion('0.1')
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'access-token')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, configSwagger);
    swagger_1.SwaggerModule.setup('api', app, document, {
        customSiteTitle: 'DSN - Weighbridge Management System',
    });
    await app.listen(WBMS_APP_PORT || 6001);
}
bootstrap();
const printEnvVar = () => {
    const config = new config_1.ConfigService();
    const WBMS_APP_DOMAIN = config.get('WBMS_APP_DOMAIN');
    const WBMS_APP_PORT = config.get('WBMS_APP_PORT');
    const WBMS_DB_DOMAIN = config.get('WBMS_DB_DOMAIN');
    const WBMS_DB_PORT = config.get('WBMS_DB_PORT');
    const WBMS_DB_USER = config.get('WBMS_DB_USER');
    const WBMS_DB_PASSWORD = config.get('WBMS_DB_PASSWORD');
    const WBMS_DB_NAME = config.get('WBMS_DB_NAME');
    const WBMS_DB_URL = config.get('WBMS_DB_URL');
    const WBMS_SITE_TYPE = config.get('WBMS_SITE_TYPE');
    const WBMS_WB_IP = config.get('WBMS_WB_IP');
    const WBMS_WB_PORT = config.get('WBMS_WB_PORT');
    const WBMS_WB_MIN_WEIGHT = config.get('WBMS_WB_MIN_WEIGHT');
    const WBMS_WB_STABLE_PERIOD = config.get('WBMS_WB_STABLE_PERIOD');
    const WBMS_SEMAI_API_URL = config.get('WBMS_SEMAI_API_URL');
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
//# sourceMappingURL=main.js.map