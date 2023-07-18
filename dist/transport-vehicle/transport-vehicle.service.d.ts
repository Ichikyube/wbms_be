import { DbService } from 'src/db/db.service';
import { CreateTransportVehicleDto, UpdateTransportVehicleDto } from './dto';
import { TransportVehicleEntity } from './entities';
export declare class TransportVehicleService {
    private db;
    constructor(db: DbService);
    getAll(): Promise<TransportVehicleEntity[]>;
    getAllDeleted(): Promise<TransportVehicleEntity[]>;
    getById(id: string): Promise<TransportVehicleEntity>;
    searchFirst(query: any): Promise<TransportVehicleEntity>;
    searchMany(query: any): Promise<TransportVehicleEntity[]>;
    searchFirstDeleted(query: any): Promise<TransportVehicleEntity>;
    searchManyDeleted(query: any): Promise<TransportVehicleEntity[]>;
    create(dto: CreateTransportVehicleDto, userId: string): Promise<TransportVehicleEntity>;
    updateById(id: string, dto: UpdateTransportVehicleDto, userId: string): Promise<TransportVehicleEntity>;
    deleteById(id: string, userId: string): Promise<TransportVehicleEntity>;
}
