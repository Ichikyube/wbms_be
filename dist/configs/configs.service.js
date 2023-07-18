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
exports.ConfigsService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../db/db.service");
const config_1 = require("@nestjs/config");
let ConfigsService = exports.ConfigsService = class ConfigsService {
    constructor(db, config) {
        this.db = db;
        this.config = config;
    }
    async getEnv() {
        const dataOut = {
            status: true,
            message: '',
            data: {},
            logs: {},
        };
        try {
            const ENV = {
                WBMS_SEMAI_BACKEND_URL: this.config.get('WBMS_SEMAI_BACKEND_URL'),
                WBMS_SEMAI_API_KEY: this.config.get('WBMS_SEMAI_API_KEY'),
                WBMS_WB_IP: this.config.get('WBMS_WB_IP'),
                WBMS_WB_PORT: this.config.get('WBMS_WB_PORT'),
                WBMS_WB_MIN_WEIGHT: this.config.get('WBMS_WB_MIN_WEIGHT'),
                WBMS_WB_STABLE_PERIOD: this.config.get('WBMS_WB_STABLE_PERIOD'),
            };
            dataOut.data = Object.assign(Object.assign({}, dataOut.data), { ENV });
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    async getAll() {
        const dataOut = {
            status: true,
            message: '',
            page: 0,
            totalRecords: 0,
            records: {},
            logs: {},
        };
        try {
            const records = await this.db.config.findMany({
                where: { isDeleted: false },
            });
            dataOut.records = records;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    async searchMany(query) {
        const dataOut = {
            status: true,
            message: '',
            page: 0,
            totalRecords: 0,
            records: {},
            logs: {},
        };
        try {
            const records = await this.db.config.findMany(Object.assign(Object.assign({}, query), { isDeleted: false }));
            dataOut.records = records;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    async searchFirst(query) {
        const dataOut = {
            status: true,
            message: '',
            record: {},
            logs: {},
        };
        try {
            const record = await this.db.config.findFirst(Object.assign(Object.assign({}, query), { isDeleted: false }));
            dataOut.record = record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    async getById(id) {
        const dataOut = {
            status: true,
            message: '',
            page: 0,
            totalRecords: 0,
            record: {},
            logs: {},
        };
        try {
            const record = await this.db.config.findUnique({
                where: { id },
            });
            dataOut.record = record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    async create(dto) {
        const dataOut = {
            status: true,
            message: '',
            page: 0,
            totalRecords: 0,
            record: {},
            logs: {},
        };
        try {
            const params = {
                data: Object.assign(Object.assign({}, dto), { userCreated: '', userModified: '' }),
            };
            const record = await this.db.config.create(params);
            dataOut.record = record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    async updateById(id, dto) {
        const dataOut = {
            status: true,
            message: '',
            page: 0,
            totalRecords: 0,
            record: {},
            logs: {},
        };
        try {
            const params = {
                where: { id },
                data: Object.assign(Object.assign({}, dto), { userModified: '' }),
            };
            const record = await this.db.config.update(params);
            dataOut.record = record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    async deleteById(id) {
        const dataOut = {
            status: true,
            message: '',
            page: 0,
            totalRecords: 0,
            record: {},
            logs: {},
        };
        try {
            const params = {
                where: { id },
                data: { isDeleted: true, userModified: '' },
            };
            const record = await this.db.config.update(params);
            dataOut.record = record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    WbTransactionUrlMapping() {
        const urlMapping = {
            1: {
                1: {
                    0: '/wb/pks-transaction/normal',
                    15: '/wb/pks-transaction/cancel',
                },
                3: {
                    10: '/wb/pks-transaction/normal',
                    15: '/wb/pks-transaction/cancel',
                },
                4: {
                    15: '/wb/pks-transaction/cancel',
                    20: '/wb/pks-transaction/cancel',
                },
                5: { 23: '/wb/pks-transaction/reject' },
            },
            2: {
                1: { 0: '/wb/t30-transaction/normal' },
                4: { 20: '/wb/t30-transaction/cancel' },
            },
            3: {
                4: { 20: '/wb/bulking-transaction/normal' },
            },
        };
        return urlMapping;
    }
    TransactionValidation() {
        const statusMapping = {
            1: {
                1: {
                    0: 'pks-normal',
                    15: 'pks-cancel',
                },
                3: {
                    10: 'pks-normal',
                    15: 'pks-cancel',
                },
                4: {
                    15: 'pks-cancel',
                    20: 'pks-cancel',
                },
                5: { 23: 'pks-reject' },
            },
            2: {
                1: { 0: '/wb/t30-transaction/normal' },
                4: { 20: '/wb/t30-transaction/cancel' },
            },
            3: {
                4: { 20: '/wb/bulking-transaction/normal' },
            },
        };
        return statusMapping;
    }
};
exports.ConfigsService = ConfigsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService, config_1.ConfigService])
], ConfigsService);
//# sourceMappingURL=configs.service.js.map