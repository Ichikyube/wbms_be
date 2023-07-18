import { DbService } from 'src/db/db.service';
import { CreateCityDto, UpdateCityDto } from './dto';
import { CityEntity } from './entities';
export declare class CitiesService {
    private db;
    constructor(db: DbService);
    getAll(): Promise<CityEntity[]>;
    getAllDeleted(): Promise<CityEntity[]>;
    getById(id: string): Promise<CityEntity>;
    searchFirst(query: any): Promise<CityEntity>;
    searchMany(query: any): Promise<CityEntity[]>;
    searchFirstDeleted(query: any): Promise<CityEntity>;
    searchManyDeleted(query: any): Promise<CityEntity[]>;
    create(dto: CreateCityDto, userId: string): Promise<CityEntity>;
    updateById(id: string, dto: UpdateCityDto, userId: string): Promise<CityEntity>;
    deleteById(id: string, userId: string): Promise<CityEntity>;
}
