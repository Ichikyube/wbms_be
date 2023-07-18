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
exports.CustomerGroupsService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../db/db.service");
let CustomerGroupsService = exports.CustomerGroupsService = class CustomerGroupsService {
    constructor(db) {
        this.db = db;
    }
    async getAll() {
        const records = await this.db.customerGroup.findMany({
            where: { isDeleted: false },
        });
        return records;
    }
    async getAllDeleted() {
        const records = await this.db.customerGroup.findMany({
            where: { isDeleted: true },
        });
        return records;
    }
    async getById(id) {
        const record = await this.db.customerGroup.findUnique({
            where: { id },
        });
        return record;
    }
    async searchFirst(query) {
        query.where = Object.assign(Object.assign({}, query.where), { isDeleted: false });
        const record = await this.db.customerGroup.findFirst(query);
        return record;
    }
    async searchMany(query) {
        query.where = Object.assign(Object.assign({}, query.where), { isDeleted: false });
        const records = await this.db.customerGroup.findMany(query);
        return records;
    }
    async searchFirstDeleted(query) {
        query.where = Object.assign(Object.assign({}, query.where), { isDeleted: true });
        const record = await this.db.customerGroup.findFirst(query);
        return record;
    }
    async searchManyDeleted(query) {
        query.where = Object.assign(Object.assign({}, query.where), { isDeleted: true });
        const records = await this.db.customerGroup.findMany(query);
        return records;
    }
    async create(dto, userId) {
        const params = {
            data: Object.assign(Object.assign({}, dto), { userCreated: userId, userModified: userId }),
        };
        const record = await this.db.customerGroup.create(params);
        return record;
    }
    async updateById(id, dto, userId) {
        const params = {
            where: { id },
            data: Object.assign(Object.assign({}, dto), { userModified: userId }),
        };
        const record = await this.db.customerGroup.update(params);
        return record;
    }
    async deleteById(id, userId) {
        const params = {
            where: { id },
            data: { isDeleted: true, userModified: userId },
        };
        const record = await this.db.customerGroup.update(params);
        return record;
    }
};
exports.CustomerGroupsService = CustomerGroupsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], CustomerGroupsService);
//# sourceMappingURL=customerGroups.service.js.map