import { DbService } from 'src/db/db.service';
import { CreateMillDto, UpdateMillDto } from './dto';
import { MillEntity } from './entities';
export declare class MillsService {
    private db;
    constructor(db: DbService);
    getAll(): Promise<MillEntity[]>;
    getAllDeleted(): Promise<MillEntity[]>;
    getById(id: string): Promise<MillEntity>;
    searchFirst(query: any): Promise<MillEntity>;
    searchMany(query: any): Promise<MillEntity[]>;
    searchFirstDeleted(query: any): Promise<MillEntity>;
    searchManyDeleted(query: any): Promise<MillEntity[]>;
    create(dto: CreateMillDto, userId: string): Promise<MillEntity>;
    updateById(id: string, dto: UpdateMillDto, userId: string): Promise<MillEntity>;
    deleteById(id: string, userId: string): Promise<MillEntity>;
}
