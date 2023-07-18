import { DbService } from "src/db/db.service";
import { CreateProvinceDto, UpdateProvinceDto } from "./dto";
import { ProvinceEntity } from "./entities";
export declare class ProvincesService {
    private db;
    constructor(db: DbService);
    getAll(): Promise<ProvinceEntity[]>;
    getAllDeleted(): Promise<ProvinceEntity[]>;
    getById(id: string): Promise<ProvinceEntity>;
    searchFirst(query: any): Promise<ProvinceEntity>;
    searchMany(query: any): Promise<ProvinceEntity[]>;
    searchFirstDeleted(query: any): Promise<ProvinceEntity>;
    searchManyDeleted(query: any): Promise<ProvinceEntity[]>;
    create(dto: CreateProvinceDto, userId: string): Promise<ProvinceEntity>;
    updateById(id: string, dto: UpdateProvinceDto, userId: string): Promise<ProvinceEntity>;
    deleteById(id: string, userId: string): Promise<ProvinceEntity>;
}
