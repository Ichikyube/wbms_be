import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CacheModule } from '@nestjs/cache-manager';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './db/db.module';
import { TransactionModule } from './transactions/transactions.module';
import { SitesModule } from './sites/sites.module';
import { CompaniesModule } from './companies/companies.module';
import { CitiesModule } from './cities/cities.module';
import { CustomerTypesModule } from './customerTypes/customerTypes.module';
import { CustomerGroupsModule } from './customerGroups/customerGroups.module';
import { BarcodeTypesModule } from './barcodeTypes/barcodeTypes.module';
import { CustomersModule } from './customers/customers.module';
import { MillsModule } from './mills/mills.module';
import { WeighbridgesModule } from './weighbridges/weighbridges.module';
import { ConfigsModule } from './configs/configs.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { StorageTanksModule } from './storageTanks/storageTanks.module';
import { ProductGroupsModule } from './productGroups/productGroups.module';
import { ProvincesModule } from './provinces/provinces.module';
import { SemaiModule } from './semai/semai.module';
import { APP_GUARD } from '@nestjs/core';
import { DriverModule } from './driver/driver.module';
import { TransportVehicleModule } from './transport-vehicle/transport-vehicle.module';
import { AtGuard } from './common/guards';
import { FilesModule } from './files/files.module';
import { join } from 'path';
import { RolesModule } from './roles/roles.module';
import { ConfigRequestModule } from './config-request/config-request.module';
import { ConfigRequestsAdminModule } from './config-requests-admin/config-requests-admin.module';
import { NotificationsModule } from './notifications/notifications.module';
import { GradingCalculatorModule } from './grading-calculator/grading-calculator.module';
import { TemporaryDataModule } from './temporary-data/temporary-data.module';
import { ScheduleModule } from '@nestjs/schedule';
import configuration from './configs/configuration';
import { SseController } from './sse/sse.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SseService } from './sse/sse.service';
import { BroadcastService } from './sse/broadcast.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      // envFilePath: path.resolve(__dirname, '../.env'), // if you want to specify the path to env file
    }),
    EventEmitterModule.forRoot({
      // set this to `true` to use wildcards
      wildcard: false,
      // the delimiter used to segment namespaces
      delimiter: '.',
      // set this to `true` if you want to emit the newListener event
      newListener: false,
      // set this to `true` if you want to emit the removeListener event
      removeListener: false,
      // the maximum amount of listeners that can be assigned to an event
      maxListeners: 10,
      // show event name in memory leak message when more than maximum amount of listeners is assigned
      verboseMemoryLeak: false,
      // disable throwing uncaughtException if an error event is emitted and it has no listeners
      ignoreErrors: false,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'upload'),
      serveRoot: '/img/',
    }),
    ScheduleModule.forRoot(),
    CacheModule.register({ isGlobal: true }),
    DbModule,
    AuthModule,
    TransactionModule,
    SitesModule,
    CompaniesModule,
    CitiesModule,
    CustomerTypesModule,
    CustomerGroupsModule,
    BarcodeTypesModule,
    CustomersModule,
    MillsModule,
    WeighbridgesModule,
    ConfigsModule,
    UsersModule,
    RolesModule,
    ProductsModule,
    StorageTanksModule,
    ProductGroupsModule,
    ProvincesModule,
    SemaiModule,
    DriverModule,
    TransportVehicleModule,
    FilesModule,
    ConfigRequestModule,
    ConfigRequestsAdminModule,
    NotificationsModule,
    GradingCalculatorModule,
    TemporaryDataModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
    SseService,
    BroadcastService,
  ],
  controllers: [SseController],
})
export class AppModule {}
