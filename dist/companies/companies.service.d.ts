import { DbService } from 'src/db/db.service';
import { CreateCompanyDto, UpdateCompanyDto } from './dto';
import { CompanyEntity } from './entities';
export declare class CompaniesService {
    private db;
    constructor(db: DbService);
    getAll(): Promise<CompanyEntity[]>;
    getAllDeleted(): Promise<CompanyEntity[]>;
    getById(id: string): Promise<CompanyEntity>;
    searchFirst(query: any): Promise<CompanyEntity>;
    searchMany(query: any): Promise<CompanyEntity[]>;
    searchFirstDeleted(query: any): Promise<CompanyEntity>;
    searchManyDeleted(query: any): Promise<CompanyEntity[]>;
    create(dto: CreateCompanyDto, userId: string): Promise<CompanyEntity>;
    updateById(id: string, dto: UpdateCompanyDto, userId: string): Promise<CompanyEntity>;
    deleteById(id: string, userId: string): Promise<CompanyEntity>;
}
