import { DbService } from 'src/db/db.service';
import { CreateCustomerGroupDto, UpdateCustomerGroupDto } from './dto';
import { CustomerGroupEntity } from './entities';
export declare class CustomerGroupsService {
    private db;
    constructor(db: DbService);
    getAll(): Promise<CustomerGroupEntity[]>;
    getAllDeleted(): Promise<CustomerGroupEntity[]>;
    getById(id: string): Promise<CustomerGroupEntity>;
    searchFirst(query: any): Promise<CustomerGroupEntity>;
    searchMany(query: any): Promise<CustomerGroupEntity[]>;
    searchFirstDeleted(query: any): Promise<CustomerGroupEntity>;
    searchManyDeleted(query: any): Promise<CustomerGroupEntity[]>;
    create(dto: CreateCustomerGroupDto, userId: string): Promise<CustomerGroupEntity>;
    updateById(id: string, dto: UpdateCustomerGroupDto, userId: string): Promise<CustomerGroupEntity>;
    deleteById(id: string, userId: string): Promise<CustomerGroupEntity>;
}
