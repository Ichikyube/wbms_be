import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';

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
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { DriverModule } from './driver/driver.module';
import { TransportVehicleModule } from './transport-vehicle/transport-vehicle.module';
import { AtGuard } from './common/guards';
import { TimestampInterceptor } from './common/interceptors/timestamp.interceptor';
import {
  ACGuard,
  AccessControlModule,
  RolesBuilder,
} from 'nest-access-control';

import { FilesModule } from './files/files.module';
import { join } from 'path';
import { RolesModule } from './accessControl/roles/roles.module';
import { RbacModule } from './accessControl/rbac.module';
import { RolesService } from './accessControl/roles/roles.service';
import { SseGateway } from './sse/sse.gateway';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'upload'),
      serveRoot: '/img/',
    }),
    // AccessControlModule.forRootAsync({
    //   imports: [RolesModule],
    //   inject: [RolesService],
    //   useFactory: async (roleService: RolesService): Promise<RolesBuilder> => {
    //     return new RolesBuilder(await roleService.getRoles());
    //   },
    // }),
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
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
    // {
    //   provide: APP_GUARD,
    //   useClass: ACGuard,
    // },
    {
      provide: APP_INTERCEPTOR,
      useClass: TimestampInterceptor,
    },
    // SseGateway,
  ],
})
export class AppModule {}
