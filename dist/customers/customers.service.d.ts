import { DbService } from 'src/db/db.service';
import { CreateCustomerDto, UpdateCustomerDto } from './dto';
import { CustomerEntity } from './entities';
export declare class CustomersService {
    private db;
    constructor(db: DbService);
    getAll(): Promise<CustomerEntity[]>;
    getAllDeleted(): Promise<CustomerEntity[]>;
    getById(id: string): Promise<CustomerEntity>;
    searchFirst(query: any): Promise<CustomerEntity>;
    searchMany(query: any): Promise<CustomerEntity[]>;
    searchFirstDeleted(query: any): Promise<CustomerEntity>;
    searchManyDeleted(query: any): Promise<CustomerEntity[]>;
    create(dto: CreateCustomerDto, userId: string): Promise<CustomerEntity>;
    updateById(id: string, dto: UpdateCustomerDto, userId: string): Promise<CustomerEntity>;
    deleteById(id: string, userId: string): Promise<CustomerEntity>;
}
