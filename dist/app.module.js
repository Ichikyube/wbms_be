"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
const db_module_1 = require("./db/db.module");
const transactions_module_1 = require("./transactions/transactions.module");
const sites_module_1 = require("./sites/sites.module");
const companies_module_1 = require("./companies/companies.module");
const cities_module_1 = require("./cities/cities.module");
const customerTypes_module_1 = require("./customerTypes/customerTypes.module");
const customerGroups_module_1 = require("./customerGroups/customerGroups.module");
const barcodeTypes_module_1 = require("./barcodeTypes/barcodeTypes.module");
const customers_module_1 = require("./customers/customers.module");
const mills_module_1 = require("./mills/mills.module");
const weighbridges_module_1 = require("./weighbridges/weighbridges.module");
const configs_module_1 = require("./configs/configs.module");
const users_module_1 = require("./users/users.module");
const products_module_1 = require("./products/products.module");
const storageTanks_module_1 = require("./storageTanks/storageTanks.module");
const productGroups_module_1 = require("./productGroups/productGroups.module");
const provinces_module_1 = require("./provinces/provinces.module");
const semai_module_1 = require("./semai/semai.module");
const core_1 = require("@nestjs/core");
const driver_module_1 = require("./driver/driver.module");
const transport_vehicle_module_1 = require("./transport-vehicle/transport-vehicle.module");
const guards_1 = require("./common/guards");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            db_module_1.DbModule,
            auth_module_1.AuthModule,
            transactions_module_1.TransactionModule,
            sites_module_1.SitesModule,
            companies_module_1.CompaniesModule,
            cities_module_1.CitiesModule,
            customerTypes_module_1.CustomerTypesModule,
            customerGroups_module_1.CustomerGroupsModule,
            barcodeTypes_module_1.BarcodeTypesModule,
            customers_module_1.CustomersModule,
            mills_module_1.MillsModule,
            weighbridges_module_1.WeighbridgesModule,
            configs_module_1.ConfigsModule,
            users_module_1.UsersModule,
            products_module_1.ProductsModule,
            storageTanks_module_1.StorageTanksModule,
            productGroups_module_1.ProductGroupsModule,
            provinces_module_1.ProvincesModule,
            semai_module_1.SemaiModule,
            driver_module_1.DriverModule,
            transport_vehicle_module_1.TransportVehicleModule
        ],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: guards_1.AtGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map