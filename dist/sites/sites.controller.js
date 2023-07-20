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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SitesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const sites_service_1 = require("./sites.service");
const dto_1 = require("./dto");
const entities_1 = require("./entities");
let SitesController = exports.SitesController = class SitesController {
    constructor(sitesService) {
        this.sitesService = sitesService;
    }
    async syncWithSemai() {
        const dataOut = {
            status: true,
            message: '',
            data: {
                site: {
                    records: [],
                    totalRecords: 0,
                    page: 0,
                },
            },
            logs: {},
        };
        try {
            const records = await this.sitesService.syncWithSemai();
            dataOut.data.site.records = records;
            dataOut.data.site.totalRecords = records.length;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = Object.assign(Object.assign({}, dataOut.logs), { error });
        }
        return dataOut;
    }
    async getAll() {
        const dataOut = {
            status: true,
            message: '',
            data: {
                site: {
                    records: [],
                    totalRecords: 0,
                    page: 0,
                },
            },
            logs: {},
        };
        try {
            const records = await this.sitesService.getAll();
            dataOut.data.site.records = records;
            dataOut.data.site.totalRecords = records.length;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = Object.assign(Object.assign({}, dataOut.logs), { error });
        }
        return dataOut;
    }
    async getAllDeleted() {
        const dataOut = {
            status: true,
            message: '',
            data: {
                site: {
                    records: [],
                    totalRecords: 0,
                    page: 0,
                },
            },
            logs: {},
        };
        try {
            const records = await this.sitesService.getAllDeleted();
            dataOut.data.site.records = records;
            dataOut.data.site.totalRecords = records.length;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = Object.assign(Object.assign({}, dataOut.logs), { error });
        }
        return dataOut;
    }
    async getById(id) {
        const dataOut = {
            status: true,
            message: '',
            data: {
                site: null,
            },
            logs: {},
        };
        try {
            const record = await this.sitesService.getById(id);
            dataOut.data.site = record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = Object.assign(Object.assign({}, dataOut.logs), { param: id, error });
        }
        return dataOut;
    }
    async searchFirst(query) {
        const dataOut = {
            status: true,
            message: '',
            data: {
                site: {
                    records: [],
                    totalRecords: 0,
                    page: 0,
                },
            },
            logs: {},
        };
        try {
            const record = await this.sitesService.searchFirst(query);
            if (record) {
                dataOut.data.site.records.push(record);
                dataOut.data.site.totalRecords = 1;
            }
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = Object.assign(Object.assign({}, dataOut.logs), { reqBody: query, error });
        }
        return dataOut;
    }
    async searchMany(query) {
        const dataOut = {
            status: true,
            message: '',
            data: {
                site: {
                    records: [],
                    totalRecords: 0,
                    page: 0,
                },
            },
            logs: {},
        };
        try {
            const records = await this.sitesService.searchMany(query);
            dataOut.data.site.records = records;
            dataOut.data.site.totalRecords = records.length;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = Object.assign(Object.assign({}, dataOut.logs), { reqBody: query, error });
        }
        return dataOut;
    }
    async searchFirstDeleted(query) {
        const dataOut = {
            status: true,
            message: '',
            data: {
                site: {
                    records: [],
                    totalRecords: 0,
                    page: 0,
                },
            },
            logs: {},
        };
        try {
            const record = await this.sitesService.searchFirstDeleted(query);
            if (record) {
                dataOut.data.site.records.push(record);
                dataOut.data.site.totalRecords = 1;
            }
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = Object.assign(Object.assign({}, dataOut.logs), { reqBody: query, error });
        }
        return dataOut;
    }
    async searchManyDeleted(query) {
        const dataOut = {
            status: true,
            message: '',
            data: {
                site: {
                    records: [],
                    totalRecords: 0,
                    page: 0,
                },
            },
            logs: {},
        };
        try {
            const records = await this.sitesService.searchManyDeleted(query);
            dataOut.data.site.records = records;
            dataOut.data.site.totalRecords = records.length;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = Object.assign(Object.assign({}, dataOut.logs), { reqBody: query, error });
        }
        return dataOut;
    }
    async create(dto, req) {
        const dataOut = {
            status: true,
            message: '',
            data: {
                site: null,
            },
            logs: {},
        };
        try {
            const userId = '';
            const record = await this.sitesService.create(dto, userId);
            dataOut.data.site = record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = Object.assign(Object.assign({}, dataOut.logs), { reqBody: dto, error });
        }
        return dataOut;
    }
    async updateById(id, dto, req) {
        const dataOut = {
            status: true,
            message: '',
            data: {
                site: null,
            },
            logs: {},
        };
        try {
            const userId = '';
            console.log(id);
            const record = await this.sitesService.updateById(id, dto, userId);
            dataOut.data.site = record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = Object.assign(Object.assign({}, dataOut.logs), { reqBody: dto, error });
        }
        return dataOut;
    }
    async deleteById(id, req) {
        const dataOut = {
            status: true,
            message: '',
            data: {
                site: null,
            },
            logs: {},
        };
        try {
            const userId = '';
            const record = await this.sitesService.deleteById(id, userId);
            dataOut.data.site = record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = Object.assign(Object.assign({}, dataOut.logs), { param: id, error });
        }
        return dataOut;
    }
};
__decorate([
    (0, common_1.Get)('sync-with-semai'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SitesController.prototype, "syncWithSemai", null);
__decorate([
    (0, common_1.Get)(''),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.SiteEntity, isArray: true }),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SitesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('deleted'),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.SiteEntity, isArray: true }),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SitesController.prototype, "getAllDeleted", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.SiteEntity }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SitesController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)('search-first'),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.SiteEntity }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SitesController.prototype, "searchFirst", null);
__decorate([
    (0, common_1.Post)('search-many'),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.SiteEntity, isArray: true }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SitesController.prototype, "searchMany", null);
__decorate([
    (0, common_1.Post)('search-first-deleted'),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.SiteEntity }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SitesController.prototype, "searchFirstDeleted", null);
__decorate([
    (0, common_1.Post)('search-many-deleted'),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.SiteEntity, isArray: true }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SitesController.prototype, "searchManyDeleted", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.SiteEntity }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateSiteDto, Object]),
    __metadata("design:returntype", Promise)
], SitesController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.SiteEntity }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateSiteDto, Object]),
    __metadata("design:returntype", Promise)
], SitesController.prototype, "updateById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.SiteEntity }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SitesController.prototype, "deleteById", null);
exports.SitesController = SitesController = __decorate([
    (0, swagger_1.ApiTags)('Sites'),
    (0, common_1.Controller)('api/sites'),
    __metadata("design:paramtypes", [sites_service_1.SitesService])
], SitesController);
//# sourceMappingURL=sites.controller.js.map