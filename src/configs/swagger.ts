import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import * as basicAuth from 'express-basic-auth';

const SWAGGER_ENVS = ['local', 'dev', 'staging'];

export function configureSwaggerDocs(
    app: INestApplication,
    configService: ConfigService,
) {
    if (SWAGGER_ENVS.includes(configService.get < string > ('NODE_ENV'))) {
        app.use(
            ['/docs', '/docs-json', '/docs-yaml'],
            basicAuth({
                challenge: true,
                users: {
                    [configService.get < string > ('SWAGGER_USER')]: configService.get < string > ('SWAGGER_PASSWORD'),
                },
            }),
        );

        const config = new DocumentBuilder()
            .setTitle('Weighbridge Management System')
            .setDescription('Weighbridge Management System API Documentation')
            .setVersion('0.1')
            .addBearerAuth({
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                in: 'header'
            }, 'access-token')
            .addTag('DNS')
            .build();

        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('api', app, document, {
            customSiteTitle: 'DSN - Weighbridge Management System',
        });
    }
}

export default class SwaggerDocumentation {
	private app: INestApplication;

	constructor(app: INestApplication) {
		this.app = app;
	}

	public serve(): void {
		// Configure swagger
		const swaggerConfig = new DocumentBuilder()
			.setTitle('NestJS starter-kit')
			.setDescription('NestJS web-server starter kit API, including User management and Role based authorizations')
			.setContact('Loan Alouache', '', 'alouache.loan@gmail.com')
			.setVersion('1.0')
			.addTag('Users')
			.addTag('Authentication')
			.addBearerAuth()
			.build();

		const swaggerDocument = SwaggerModule.createDocument(this.app, swaggerConfig);
		SwaggerModule.setup('api', this.app, swaggerDocument);
	}
}
