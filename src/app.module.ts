import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

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
import { ACGuard, AccessControlModule } from 'nest-access-control';
import { RBAC_POLICY } from './auth/rbac/rbac-policy';
import { MulterModule } from '@nestjs/platform-express';
import { multerOptions } from './configs/multer.config';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AccessControlModule.forRoles(RBAC_POLICY),
    MulterModule.register(multerOptions),
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
    ProductsModule,
    StorageTanksModule,
    ProductGroupsModule,
    ProvincesModule,
    SemaiModule,
    DriverModule,
    TransportVehicleModule,
    FilesModule
  ],
  controllers: [],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: AtGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: ACGuard,
    // },
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: TimestampInterceptor,
    // },
  ],
})
export class AppModule {}
