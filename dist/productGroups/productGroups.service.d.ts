import { DbService } from 'src/db/db.service';
import { CreateProductGroupDto, UpdateProductGroupDto } from './dto';
import { ProductGroupEntity } from './entities';
export declare class ProductGroupsService {
    private db;
    constructor(db: DbService);
    getAll(): Promise<ProductGroupEntity[]>;
    getAllDeleted(): Promise<ProductGroupEntity[]>;
    getById(id: string): Promise<ProductGroupEntity>;
    searchFirst(query: any): Promise<ProductGroupEntity>;
    searchMany(query: any): Promise<ProductGroupEntity[]>;
    searchFirstDeleted(query: any): Promise<ProductGroupEntity>;
    searchManyDeleted(query: any): Promise<ProductGroupEntity[]>;
    create(dto: CreateProductGroupDto, userId: string): Promise<ProductGroupEntity>;
    updateById(id: string, dto: UpdateProductGroupDto, userId: string): Promise<ProductGroupEntity>;
    deleteById(id: string, userId: string): Promise<ProductGroupEntity>;
}
