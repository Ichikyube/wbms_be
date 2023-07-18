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
exports.BarcodeTypesService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../db/db.service");
let BarcodeTypesService = exports.BarcodeTypesService = class BarcodeTypesService {
    constructor(db) {
        this.db = db;
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
            const records = await this.db.barcodeType.findMany({
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
    async getAllDeleted() {
        const dataOut = {
            status: true,
            message: '',
            page: 0,
            totalRecords: 0,
            records: {},
            logs: {},
        };
        try {
            const records = await this.db.barcodeType.findMany({
                where: { isDeleted: true },
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
        query.where = Object.assign(Object.assign({}, query.where), { isDeleted: false });
        try {
            const records = await this.db.barcodeType.findMany(query);
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
        query.where = Object.assign(Object.assign({}, query.where), { isDeleted: false });
        try {
            const record = await this.db.barcodeType.findFirst(query);
            dataOut.record = record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    async searchDeleted(query) {
        const dataOut = {
            status: true,
            message: '',
            page: 0,
            totalRecords: 0,
            records: {},
            logs: {},
        };
        query.where = Object.assign(Object.assign({}, query.where), { isDeleted: true });
        try {
            const records = await this.db.barcodeType.findMany(query);
            dataOut.records = records;
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
            const record = await this.db.barcodeType.findUnique({
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
            const record = await this.db.barcodeType.create(params);
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
            const record = await this.db.barcodeType.update(params);
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
            const record = await this.db.barcodeType.update(params);
            dataOut.record = record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
};
exports.BarcodeTypesService = BarcodeTypesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], BarcodeTypesService);
//# sourceMappingURL=barcodeTypes.service.js.map