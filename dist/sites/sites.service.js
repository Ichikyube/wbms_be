"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SitesService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const db_service_1 = require("../db/db.service");
const semai_service_1 = require("../semai/semai.service");
let SitesService = exports.SitesService = class SitesService {
    constructor(db, config, semaiService) {
        this.db = db;
        this.config = config;
        this.semaiService = semaiService;
    }
    async getAll() {
        const records = await this.db.site.findMany({
            where: { isDeleted: false },
        });
        return records;
    }
    async getAllDeleted() {
        const records = await this.db.site.findMany({
            where: { isDeleted: true },
        });
        return records;
    }
    async getById(id) {
        const record = await this.db.site.findUnique({
            where: { id },
        });
        return record;
    }
    async searchFirst(query) {
        query.where = Object.assign(Object.assign({}, query.where), { isDeleted: false });
        const record = await this.db.site.findFirst(query);
        return record;
    }
    async searchMany(query) {
        query.where = Object.assign(Object.assign({}, query.where), { isDeleted: false });
        const records = await this.db.site.findMany(query);
        return records;
    }
    async searchFirstDeleted(query) {
        query.where = Object.assign(Object.assign({}, query.where), { isDeleted: true });
        const record = await this.db.site.findFirst(query);
        return record;
    }
    async searchManyDeleted(query) {
        query.where = Object.assign(Object.assign({}, query.where), { isDeleted: true });
        const records = await this.db.site.findMany(query);
        return records;
    }
    async create(dto, userId) {
        const params = {
            data: Object.assign(Object.assign({}, dto), { userCreated: userId, userModified: userId }),
        };
        const record = await this.db.site.create(params);
        return record;
    }
    async updateById(id, dto, userId) {
        const params = {
            where: { id },
            data: Object.assign(Object.assign({}, dto), { userModified: userId }),
        };
        const record = await this.db.site.update(params);
        return record;
    }
    async deleteById(id, userId) {
        const params = {
            where: { id },
            data: { isDeleted: true, userModified: userId },
        };
        const record = await this.db.site.update(params);
        return record;
    }
    async syncWithSemai() {
        const sites = await this.semaiService.sites().then((res) => res.data.sites);
        if ((sites === null || sites === void 0 ? void 0 : sites.length) > 0)
            sites.forEach((site) => {
                this.db.site
                    .findFirstOrThrow({
                    where: {
                        refType: 1,
                        refId: site.id,
                    },
                })
                    .then((res) => {
                    this.db.site
                        .update({
                        where: { id: res.id },
                        data: {
                            sourceSiteRefId: site === null || site === void 0 ? void 0 : site.sourceSiteId,
                            sourceSiteName: site === null || site === void 0 ? void 0 : site.sourceSiteName,
                            companyRefId: site === null || site === void 0 ? void 0 : site.companyId,
                            companyName: site === null || site === void 0 ? void 0 : site.companyName,
                            code: site === null || site === void 0 ? void 0 : site.code,
                            name: site === null || site === void 0 ? void 0 : site.name,
                            shortName: site === null || site === void 0 ? void 0 : site.shortName,
                            description: site === null || site === void 0 ? void 0 : site.description,
                            latitude: site === null || site === void 0 ? void 0 : site.latitude,
                            longitude: site === null || site === void 0 ? void 0 : site.longitude,
                            solarCalibration: site === null || site === void 0 ? void 0 : site.solarCalibration,
                            isMill: site === null || site === void 0 ? void 0 : site.isMill,
                            isDeleted: !!(site === null || site === void 0 ? void 0 : site.isDeleted),
                        },
                    })
                        .then((res) => console.log(res));
                })
                    .catch(() => {
                    this.db.site
                        .create({
                        data: {
                            refType: 1,
                            refId: site.id,
                            sourceSiteRefId: site === null || site === void 0 ? void 0 : site.sourceSiteId,
                            sourceSiteName: site === null || site === void 0 ? void 0 : site.sourceSiteName,
                            companyRefId: site === null || site === void 0 ? void 0 : site.companyId,
                            companyName: site === null || site === void 0 ? void 0 : site.companyName,
                            code: site === null || site === void 0 ? void 0 : site.code,
                            name: site === null || site === void 0 ? void 0 : site.name,
                            shortName: site === null || site === void 0 ? void 0 : site.shortName,
                            description: site === null || site === void 0 ? void 0 : site.description,
                            latitude: site === null || site === void 0 ? void 0 : site.latitude,
                            longitude: site === null || site === void 0 ? void 0 : site.longitude,
                            solarCalibration: site === null || site === void 0 ? void 0 : site.solarCalibration,
                            isMill: site === null || site === void 0 ? void 0 : site.isMill,
                            isDeleted: !!(site === null || site === void 0 ? void 0 : site.isDeleted),
                            userCreated: "",
                            userModified: "",
                        },
                    })
                        .then((res) => console.log(res));
                });
            });
        return sites;
    }
};
exports.SitesService = SitesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService,
        config_1.ConfigService,
        semai_service_1.SemaiService])
], SitesService);
//# sourceMappingURL=sites.service.js.map