export * from './city.entity';
import { UserEntity } from './user.entity';
import { RoleEntity } from './roles.entity';
import { ProductEntity } from './product.entity';
import { DriverEntity } from './driver.entity';
import { CustomerTypeEntity } from './customerType.entity';
import { CustomerGroupEntity } from './customerGroup.entity';
import { CustomerEntity } from './customer.entity';
import { MillEntity } from './mill.entity';
import { CompanyEntity } from './company.entity';
import { CityEntity } from './city.entity';
import { ProductGroupEntity } from './productGroup.entity';
import { ProvinceEntity } from './province.entity';
import { Semai } from './semai.entity';
import { SiteEntity } from './site.entity';
import { StorageTankEntity } from './storageTank.entity';
import { TransactionEntity } from './transaction.entity';
import { TransportVehicleEntity } from './transport-vehicle.entity';
import { WeighbridgeEntity } from './weighbridge.entity';


const entities = [
    RoleEntity,
    CityEntity, 
    CompanyEntity, 
    CustomerEntity, 
    CustomerGroupEntity, 
    CustomerTypeEntity, 
    DriverEntity, 
    MillEntity, 
    ProductEntity, 
    ProductGroupEntity, 
    ProvinceEntity, 
    Semai, 
    SiteEntity, 
    StorageTankEntity,
    TransactionEntity,
    TransportVehicleEntity,
    UserEntity,
    WeighbridgeEntity
];

export { 
    CityEntity, 
    CompanyEntity, 
    CustomerEntity, 
    CustomerGroupEntity, 
    CustomerTypeEntity, 
    DriverEntity, 
    MillEntity, 
    ProductEntity, 
    ProductGroupEntity, 
    ProvinceEntity, 
    Semai, 
    SiteEntity, 
    StorageTankEntity,
    TransactionEntity,
    TransportVehicleEntity,
    UserEntity,
    WeighbridgeEntity
};
export default entities;
