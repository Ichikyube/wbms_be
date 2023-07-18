import { DbService } from 'src/db/db.service';
import { CreateDriverDto, UpdateDriverDto } from './dto';
import { DriverEntity } from './entities';
export declare class DriverService {
    private db;
    constructor(db: DbService);
    getAll(): Promise<DriverEntity[]>;
    getAllDeleted(): Promise<DriverEntity[]>;
    getById(id: string): Promise<DriverEntity>;
    searchFirst(query: any): Promise<DriverEntity>;
    searchMany(query: any): Promise<DriverEntity[]>;
    searchFirstDeleted(query: any): Promise<DriverEntity>;
    searchManyDeleted(query: any): Promise<DriverEntity[]>;
    create(dto: CreateDriverDto, userId: string): Promise<DriverEntity>;
    updateById(id: string, dto: UpdateDriverDto, userId: string): Promise<DriverEntity>;
    deleteById(id: string, userId: string): Promise<DriverEntity>;
}
