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
exports.TransportVehicleController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const transport_vehicle_service_1 = require("./transport-vehicle.service");
const dto_1 = require("./dto");
const entities_1 = require("./entities");
let TransportVehicleController = exports.TransportVehicleController = class TransportVehicleController {
    constructor(transportVehicleService) {
        this.transportVehicleService = transportVehicleService;
    }
    async getAll() {
        const dataOut = {
            status: true,
            message: '',
            data: {
                transportVehicle: {
                    records: [],
                    totalRecords: 0,
                    page: 0
                }
            },
            logs: {}
        };
        try {
            const records = await this.transportVehicleService.getAll();
            dataOut.data.transportVehicle.records = records;
            dataOut.data.transportVehicle.totalRecords = records.length;
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
                transportVehicle: {
                    records: [],
                    totalRecords: 0,
                    page: 0
                }
            },
            logs: {}
        };
        try {
            const records = await this.transportVehicleService.getAllDeleted();
            dataOut.data.transportVehicle.records = records;
            dataOut.data.transportVehicle.totalRecords = records.length;
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
                transportVehicle: null
            },
            logs: {}
        };
        try {
            const record = await this.transportVehicleService.getById(id);
            dataOut.data.transportVehicle = record;
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
                transportVehicle: {
                    records: [],
                    totalRecords: 0,
                    page: 0
                }
            },
            logs: {}
        };
        try {
            const record = await this.transportVehicleService.searchFirst(query);
            if (record) {
                dataOut.data.transportVehicle.records.push(record);
                dataOut.data.transportVehicle.totalRecords = 1;
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
                transportVehicle: {
                    records: [],
                    totalRecords: 0,
                    page: 0
                }
            },
            logs: {}
        };
        try {
            const records = await this.transportVehicleService.searchMany(query);
            dataOut.data.transportVehicle.records = records;
            dataOut.data.transportVehicle.totalRecords = records.length;
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
                transportVehicle: {
                    records: [],
                    totalRecords: 0,
                    page: 0
                }
            },
            logs: {}
        };
        try {
            const record = await this.transportVehicleService.searchFirstDeleted(query);
            if (record) {
                dataOut.data.transportVehicle.records.push(record);
                dataOut.data.transportVehicle.totalRecords = 1;
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
                transportVehicle: {
                    records: [],
                    totalRecords: 0,
                    page: 0
                }
            },
            logs: {}
        };
        try {
            const records = await this.transportVehicleService.searchManyDeleted(query);
            dataOut.data.transportVehicle.records = records;
            dataOut.data.transportVehicle.totalRecords = records.length;
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
                transportVehicle: null
            },
            logs: {}
        };
        try {
            const userId = '';
            const record = await this.transportVehicleService.create(dto, userId);
            dataOut.data.transportVehicle = record;
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
                transportVehicle: null
            },
            logs: {}
        };
        try {
            const userId = '';
            console.log(id);
            const record = await this.transportVehicleService.updateById(id, dto, userId);
            dataOut.data.transportVehicle = record;
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
                transportVehicle: null
            },
            logs: {}
        };
        try {
            const userId = '';
            const record = await this.transportVehicleService.deleteById(id, userId);
            dataOut.data.transportVehicle = record;
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
    (0, common_1.Get)(''),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.TransportVehicleEntity, isArray: true }),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransportVehicleController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('deleted'),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.TransportVehicleEntity, isArray: true }),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransportVehicleController.prototype, "getAllDeleted", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.TransportVehicleEntity }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransportVehicleController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)('search-first'),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.TransportVehicleEntity }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TransportVehicleController.prototype, "searchFirst", null);
__decorate([
    (0, common_1.Post)('search-many'),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.TransportVehicleEntity, isArray: true }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TransportVehicleController.prototype, "searchMany", null);
__decorate([
    (0, common_1.Post)('search-first-deleted'),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.TransportVehicleEntity }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TransportVehicleController.prototype, "searchFirstDeleted", null);
__decorate([
    (0, common_1.Post)('search-many-deleted'),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.TransportVehicleEntity, isArray: true }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TransportVehicleController.prototype, "searchManyDeleted", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.TransportVehicleEntity }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateTransportVehicleDto, Object]),
    __metadata("design:returntype", Promise)
], TransportVehicleController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.TransportVehicleEntity }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateTransportVehicleDto, Object]),
    __metadata("design:returntype", Promise)
], TransportVehicleController.prototype, "updateById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.TransportVehicleEntity }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TransportVehicleController.prototype, "deleteById", null);
exports.TransportVehicleController = TransportVehicleController = __decorate([
    (0, swagger_1.ApiTags)('Transport Vehicles'),
    (0, common_1.Controller)('api/transport-vehicle'),
    __metadata("design:paramtypes", [transport_vehicle_service_1.TransportVehicleService])
], TransportVehicleController);
//# sourceMappingURL=transport-vehicle.controller.js.map