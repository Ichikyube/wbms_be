import { DbService } from 'src/db/db.service';
import { CreateWeighbridgeDto, UpdateWeighbridgeDto } from './dto';
import { WeighbridgeEntity } from './entities';
export declare class WeighbridgesService {
    private db;
    constructor(db: DbService);
    getAll(): Promise<WeighbridgeEntity[]>;
    getAllDeleted(): Promise<WeighbridgeEntity[]>;
    getById(id: string): Promise<WeighbridgeEntity>;
    searchFirst(query: any): Promise<WeighbridgeEntity>;
    searchMany(query: any): Promise<WeighbridgeEntity[]>;
    searchFirstDeleted(query: any): Promise<WeighbridgeEntity>;
    searchManyDeleted(query: any): Promise<WeighbridgeEntity[]>;
    create(dto: CreateWeighbridgeDto, userId: string): Promise<WeighbridgeEntity>;
    updateById(id: string, dto: UpdateWeighbridgeDto, userId: string): Promise<WeighbridgeEntity>;
    deleteById(id: string, userId: string): Promise<WeighbridgeEntity>;
}
