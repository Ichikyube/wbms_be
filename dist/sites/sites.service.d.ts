import { ConfigService } from "@nestjs/config";
import { DbService } from "src/db/db.service";
import { SemaiService } from "src/semai/semai.service";
import { CreateSiteDto, UpdateSiteDto } from "./dto";
import { SiteEntity } from "./entities/site.entity";
export declare class SitesService {
    private db;
    private config;
    private semaiService;
    constructor(db: DbService, config: ConfigService, semaiService: SemaiService);
    getAll(): Promise<SiteEntity[]>;
    getAllDeleted(): Promise<SiteEntity[]>;
    getById(id: string): Promise<SiteEntity>;
    searchFirst(query: any): Promise<SiteEntity>;
    searchMany(query: any): Promise<SiteEntity[]>;
    searchFirstDeleted(query: any): Promise<SiteEntity>;
    searchManyDeleted(query: any): Promise<SiteEntity[]>;
    create(dto: CreateSiteDto, userId: string): Promise<SiteEntity>;
    updateById(id: string, dto: UpdateSiteDto, userId: string): Promise<SiteEntity>;
    deleteById(id: string, userId: string): Promise<SiteEntity>;
    syncWithSemai(): Promise<any[]>;
}
