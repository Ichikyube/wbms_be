import { DbService } from 'src/db/db.service';
import { CreateCustomerTypeDto, UpdateCustomerTypeDto } from './dto';
import { CustomerTypeEntity } from './entities';
export declare class CustomerTypesService {
    private db;
    constructor(db: DbService);
    getAll(): Promise<CustomerTypeEntity[]>;
    getAllDeleted(): Promise<CustomerTypeEntity[]>;
    getById(id: string): Promise<CustomerTypeEntity>;
    searchFirst(query: any): Promise<CustomerTypeEntity>;
    searchMany(query: any): Promise<CustomerTypeEntity[]>;
    searchFirstDeleted(query: any): Promise<CustomerTypeEntity>;
    searchManyDeleted(query: any): Promise<CustomerTypeEntity[]>;
    create(dto: CreateCustomerTypeDto, userId: string): Promise<CustomerTypeEntity>;
    updateById(id: string, dto: UpdateCustomerTypeDto, userId: string): Promise<CustomerTypeEntity>;
    deleteById(id: string, userId: string): Promise<CustomerTypeEntity>;
}
