import { DbService } from 'src/db/db.service';
import { CreateProductDto, UpdateProductDto } from './dto';
import { ProductEntity } from './entities';
export declare class ProductsService {
    private db;
    constructor(db: DbService);
    getAll(): Promise<ProductEntity[]>;
    getAllDeleted(): Promise<ProductEntity[]>;
    getById(id: string): Promise<ProductEntity>;
    searchFirst(query: any): Promise<ProductEntity>;
    searchMany(query: any): Promise<ProductEntity[]>;
    searchFirstDeleted(query: any): Promise<ProductEntity>;
    searchManyDeleted(query: any): Promise<ProductEntity[]>;
    create(dto: CreateProductDto, userId: string): Promise<ProductEntity>;
    updateById(id: string, dto: UpdateProductDto, userId: string): Promise<ProductEntity>;
    deleteById(id: string, userId: string): Promise<ProductEntity>;
}
