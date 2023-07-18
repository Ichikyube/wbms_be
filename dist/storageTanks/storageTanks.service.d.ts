import { DbService } from 'src/db/db.service';
import { CreateStorageTankDto, UpdateStorageTankDto } from './dto';
import { StorageTankEntity } from './entities';
export declare class StorageTanksService {
    private db;
    constructor(db: DbService);
    getAll(): Promise<StorageTankEntity[]>;
    getAllDeleted(): Promise<StorageTankEntity[]>;
    getById(id: string): Promise<StorageTankEntity>;
    searchFirst(query: any): Promise<StorageTankEntity>;
    searchMany(query: any): Promise<StorageTankEntity[]>;
    searchFirstDeleted(query: any): Promise<StorageTankEntity>;
    searchManyDeleted(query: any): Promise<StorageTankEntity[]>;
    create(dto: CreateStorageTankDto, userId: string): Promise<StorageTankEntity>;
    updateById(id: string, dto: UpdateStorageTankDto, userId: string): Promise<StorageTankEntity>;
    deleteById(id: string, userId: string): Promise<StorageTankEntity>;
}
