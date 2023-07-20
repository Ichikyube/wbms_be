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
exports.ProductsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const products_service_1 = require("./products.service");
const dto_1 = require("./dto");
const entities_1 = require("./entities");
let ProductsController = exports.ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async getAll() {
        const dataOut = {
            status: true,
            message: '',
            data: {
                product: {
                    records: [],
                    totalRecords: 0,
                    page: 0,
                },
            },
            logs: {},
        };
        try {
            const records = await this.productsService.getAll();
            dataOut.data.product.records = records;
            dataOut.data.product.totalRecords = records.length;
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
                product: {
                    records: [],
                    totalRecords: 0,
                    page: 0,
                },
            },
            logs: {},
        };
        try {
            const records = await this.productsService.getAllDeleted();
            dataOut.data.product.records = records;
            dataOut.data.product.totalRecords = records.length;
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
                product: null,
            },
            logs: {},
        };
        try {
            const record = await this.productsService.getById(id);
            dataOut.data.product = record;
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
                product: {
                    records: [],
                    totalRecords: 0,
                    page: 0,
                },
            },
            logs: {},
        };
        try {
            const record = await this.productsService.searchFirst(query);
            if (record) {
                dataOut.data.product.records.push(record);
                dataOut.data.product.totalRecords = 1;
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
                product: {
                    records: [],
                    totalRecords: 0,
                    page: 0,
                },
            },
            logs: {},
        };
        try {
            const records = await this.productsService.searchMany(query);
            dataOut.data.product.records = records;
            dataOut.data.product.totalRecords = records.length;
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
                product: {
                    records: [],
                    totalRecords: 0,
                    page: 0,
                },
            },
            logs: {},
        };
        try {
            const record = await this.productsService.searchFirstDeleted(query);
            if (record) {
                dataOut.data.product.records.push(record);
                dataOut.data.product.totalRecords = 1;
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
                product: {
                    records: [],
                    totalRecords: 0,
                    page: 0,
                },
            },
            logs: {},
        };
        try {
            const records = await this.productsService.searchManyDeleted(query);
            dataOut.data.product.records = records;
            dataOut.data.product.totalRecords = records.length;
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
                product: null,
            },
            logs: {},
        };
        try {
            const userId = '';
            const record = await this.productsService.create(dto, userId);
            dataOut.data.product = record;
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
                product: null,
            },
            logs: {},
        };
        try {
            const userId = '';
            console.log(id);
            const record = await this.productsService.updateById(id, dto, userId);
            dataOut.data.product = record;
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
                product: null,
            },
            logs: {},
        };
        try {
            const userId = '';
            const record = await this.productsService.deleteById(id, userId);
            dataOut.data.product = record;
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
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.ProductEntity, isArray: true }),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('deleted'),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.ProductEntity, isArray: true }),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getAllDeleted", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.ProductEntity }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)('search-first'),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.ProductEntity }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "searchFirst", null);
__decorate([
    (0, common_1.Post)('search-many'),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.ProductEntity, isArray: true }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "searchMany", null);
__decorate([
    (0, common_1.Post)('search-first-deleted'),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.ProductEntity }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "searchFirstDeleted", null);
__decorate([
    (0, common_1.Post)('search-many-deleted'),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.ProductEntity, isArray: true }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "searchManyDeleted", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.ProductEntity }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateProductDto, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.ProductEntity }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateProductDto, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "updateById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiCreatedResponse)({ type: entities_1.ProductEntity }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "deleteById", null);
exports.ProductsController = ProductsController = __decorate([
    (0, swagger_1.ApiTags)('Products'),
    (0, common_1.Controller)('api/products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map