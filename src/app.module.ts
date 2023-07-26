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
import { RBAC_POLICY } from './auth/rbac/rbac-policy';
import { FilesModule } from './files/files.module';
import { join } from 'path';
import { RolesModule } from './auth/rbac/roles/roles.module';
import { DbService } from './db/db.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'upload'),
      serveRoot: '/img',
    }),
    // AccessControlModule.forRoles(RBAC_POLICY),
    // AccessControlModule.forRootAsync({
    //   imports: [SharedModule],
    //   inject: [PrismaService],
    //   useFactory: async (db: DbService): Promise<RolesBuilder> => {
    //     let roles = await db.role.findMany({
    //       where: {}, include: {
    //         grants: { include: { permisssion: true } }
    //       }
    //     }),
    // AccessControlModule.forRootAsync({
    //   imports: [SharedModule],
    //   inject: [DbService],
    //   useFactory: async (db: DbService): Promise<RolesBuilder> => {
    //     let roles = await db.role.findMany({
    //       where: {}, include: {
    //         grants: { include: { permisssion: true } }
    //       }
    //     })
    //     let result = roles.map(role => {
    //       return role.grants.map(grant => {
    //         let { resource, action, attributes } = grant.permisssion
    //         return { role: role.name, resource, action, attributes }
    //       })
    //     })
    //     if (result) {
    //       let grants = []
    //       result.forEach((grant) => grants = grants.concat(grant))
    //       return new RolesBuilder(grants)
    //     }
    //     return new RolesBuilder([])
    //   }
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
    ProductsModule,
    StorageTanksModule,
    ProductGroupsModule,
    ProvincesModule,
    SemaiModule,
    DriverModule,
    TransportVehicleModule,
    FilesModule,
    RolesModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ACGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TimestampInterceptor,
    },
  ],
})
export class AppModule {}
