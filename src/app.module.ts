import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
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
import { RolesModule } from './accessControl/roles/roles.module';
import { RbacModule } from './accessControl/rbac.module';
import { ConfigRequestModule } from './config-request/config-request.module';
import { ConfigRequestsAdminModule } from './config-requests-admin/config-requests-admin.module';
import { NotificationsModule } from './notifications/notifications.module';
// import { SseGateway } from './sse/sse.gateway';
import { SseController } from './sse/sse.controller';
import { RedisModule } from './redis/redis.module';
import { GradingCalculatorModule } from './grading-calculator/grading-calculator.module';
import { TemporaryDataService } from './temporary-data/temporary-data.service';
import { TemporaryDataController } from './temporary-data/temporary-data.controller';
import { TemporaryDataModule } from './temporary-data/temporary-data.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
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
    // RedisModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
    // SseGateway,
  ],
  // controllers: [SseController],
})
export class AppModule {}
