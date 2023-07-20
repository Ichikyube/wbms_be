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
exports.SemaiService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("axios");
const fs = require("fs");
const https = require("https");
const db_service_1 = require("../db/db.service");
const path_1 = require("path");
let SemaiService = exports.SemaiService = class SemaiService {
    constructor(db, config) {
        this.db = db;
        this.config = config;
        this.WBMS_SEMAI_API_URL = this.config.get('WBMS_SEMAI_API_URL');
        this.WBMS_SEMAI_API_KEY = this.config.get('WBMS_SEMAI_API_KEY');
        this.WBMS_CERT_DIR = __dirname + this.config.get('WBMS_SEMAI_CERT_DIRNAME');
        this.WBMS_SEMAI_CERT = this.config.get('WBMS_SEMAI_CERT');
        this.WBMS_SEMAI_KEY = this.config.get('WBMS_SEMAI_KEY');
        this.httpsAgent = new https.Agent({
            cert: fs.readFileSync((0, path_1.resolve)(this.WBMS_CERT_DIR, this.WBMS_SEMAI_CERT)),
            key: fs.readFileSync((0, path_1.resolve)(this.WBMS_CERT_DIR, this.WBMS_SEMAI_KEY)),
        });
        this.api = axios_1.default.create({
            baseURL: `${this.WBMS_SEMAI_API_URL}/`,
            httpsAgent: this.httpsAgent,
            headers: {
                'x-api-key': this.WBMS_SEMAI_API_KEY,
            },
        });
    }
    create(createSemaiDto) {
        return 'This action adds a new semai';
    }
    findAll() {
        return `This action returns all semai`;
    }
    findOne(id) {
        return `This action returns a #${id} semai`;
    }
    update(id, updateSemaiDto) {
        return `This action updates a #${id} semai`;
    }
    remove(id) {
        return `This action removes a #${id} semai`;
    }
    async products() {
        const dataOut = {
            status: true,
            message: '',
            data: {
                products: [],
            },
            logs: {},
        };
        try {
            const response = await this.api
                .get(`products?pageSize=0`)
                .then((res) => res === null || res === void 0 ? void 0 : res.data);
            if (!response.success)
                throw new Error(response === null || response === void 0 ? void 0 : response.message);
            dataOut.data.products = response.record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    async sites() {
        const dataOut = {
            status: true,
            message: '',
            data: {
                sites: [],
            },
            logs: {},
        };
        try {
            const response = await this.api
                .get(`sites?pageSize=0`)
                .then((res) => res === null || res === void 0 ? void 0 : res.data);
            if (!response.success)
                throw new Error(response === null || response === void 0 ? void 0 : response.message);
            dataOut.data.sites = response.records;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    async storageTanks() {
        const dataOut = {
            status: true,
            message: '',
            data: {
                storageTanks: [],
            },
            logs: {},
        };
        try {
            const response = await this.api
                .get(`storage-tanks?pageSize=0`)
                .then((res) => res === null || res === void 0 ? void 0 : res.data);
            if (!response.success)
                throw new Error(response === null || response === void 0 ? void 0 : response.message);
            dataOut.data.storageTanks = response.record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    async transportVehicles() {
        const dataOut = {
            status: true,
            message: '',
            data: {
                transportVehicles: [],
            },
            logs: {},
        };
        try {
            const response = await this.api
                .get(`transport-vehicles?pageSize=0`)
                .then((res) => res === null || res === void 0 ? void 0 : res.data);
            if (!response.success)
                throw new Error(response === null || response === void 0 ? void 0 : response.message);
            dataOut.data.transportVehicles = response.record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    async transporters() {
        const dataOut = {
            status: true,
            message: '',
            data: {
                transporters: [],
            },
            logs: {},
        };
        try {
            const response = await this.api
                .get(`transporters?pageSize=0`)
                .then((res) => res === null || res === void 0 ? void 0 : res.data);
            if (!response.success)
                throw new Error(response === null || response === void 0 ? void 0 : response.message);
            dataOut.data.transporters = response.record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    async vehicleOperators() {
        const dataOut = {
            status: true,
            message: '',
            data: {
                vehicleOperators: [],
            },
            logs: {},
        };
        try {
            const response = await this.api
                .get(`vehicle-operators?pageSize=0`)
                .then((res) => res === null || res === void 0 ? void 0 : res.data);
            if (!response.success)
                throw new Error(response === null || response === void 0 ? void 0 : response.message);
            dataOut.data.vehicleOperators = response.record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    async decodeQrcode(dto) {
        const dataOut = {
            status: true,
            message: '',
            data: {
                decodedQrcode: {},
            },
            logs: {},
        };
        try {
            const response = await this.api
                .post(`cmd/decode-qrcode`, dto)
                .then((res) => res === null || res === void 0 ? void 0 : res.data);
            if (!response.success)
                throw new Error(response === null || response === void 0 ? void 0 : response.message);
            dataOut.data.decodedQrcode = response.record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    async encodeQrcode(dto) {
        const dataOut = {
            status: true,
            message: '',
            data: {
                qrcode: {},
            },
            logs: {},
        };
        try {
            const orderId = dto.orderId;
            const functionCode = dto.functionCode;
            console.log(dto);
            const response = await this.api
                .get(`cmd/encode-qrcode/${orderId}/${functionCode}`)
                .then((res) => res === null || res === void 0 ? void 0 : res.data);
            if (!response.success)
                throw new Error(response === null || response === void 0 ? void 0 : response.message);
            dataOut.data.qrcode = response.record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    async dispatchDelivery(dto) {
        const dataOut = {
            status: true,
            message: '',
            data: {
                transaction: {},
            },
            logs: {},
        };
        try {
            console.log(dto);
            const response = await this.api
                .post(`cmd/dispatch-delivery`, dto)
                .then((res) => res === null || res === void 0 ? void 0 : res.data);
            if (!response.success)
                throw new Error(response === null || response === void 0 ? void 0 : response.message);
            dataOut.data.transaction = response.record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    async rejectDelivery(dto) {
        const dataOut = {
            status: true,
            message: '',
            data: {
                transaction: {},
            },
            logs: {},
        };
        try {
            const response = await this.api
                .post(`cmd/reject-delivery`, dto)
                .then((res) => res === null || res === void 0 ? void 0 : res.data);
            if (!response.success)
                throw new Error(response === null || response === void 0 ? void 0 : response.message);
            dataOut.data.transaction = response.record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    async closeDeliveryCanceled(dto) {
        const dataOut = {
            status: true,
            message: '',
            data: {
                transaction: {},
            },
            logs: {},
        };
        try {
            const response = await this.api
                .post(`cmd/close-delivery-as-canceled`, dto)
                .then((res) => res === null || res === void 0 ? void 0 : res.data);
            if (!response.success)
                throw new Error(response === null || response === void 0 ? void 0 : response.message);
            dataOut.data.transaction = response.record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    async closeDeliveryAccepted(dto) {
        const dataOut = {
            status: true,
            message: '',
            data: {
                transaction: {},
            },
            logs: {},
        };
        try {
            const response = await this.api
                .post(`cmd/close-delivery-as-accepted`, dto)
                .then((res) => res === null || res === void 0 ? void 0 : res.data);
            if (!response.success)
                throw new Error(response === null || response === void 0 ? void 0 : response.message);
            dataOut.data.transaction = response.record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    async closeDeliveryRejected(dto) {
        const dataOut = {
            status: true,
            message: '',
            data: {
                transaction: {},
            },
            logs: {},
        };
        try {
            console.log('data in');
            console.log(dto);
            const response = await this.api
                .post(`cmd/close-delivery-as-rejected`, dto)
                .then((res) => res === null || res === void 0 ? void 0 : res.data);
            console.log('hasil api close-delivery-as-rejected');
            console.log(response);
            if (!response.success) {
                dataOut.logs = Object.assign(Object.assign({}, dataOut.logs), { response });
                throw new Error(response === null || response === void 0 ? void 0 : response.message);
            }
            dataOut.data.transaction = response.record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = Object.assign(Object.assign({}, dataOut.logs), { error });
        }
        return dataOut;
    }
    async validateDispatchDelivery(dto) {
        const dataOut = {
            status: true,
            message: '',
            data: {
                transaction: {},
            },
            logs: {},
        };
        try {
            const response = await this.api
                .post(`cmd/validate-dispatch-delivery`, dto)
                .then((res) => res === null || res === void 0 ? void 0 : res.data);
            if (!response.success)
                throw new Error(response === null || response === void 0 ? void 0 : response.message);
            dataOut.data.transaction = response.record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    async validateUnloading(dto) {
        const dataOut = {
            status: true,
            message: '',
            data: {
                transaction: {},
            },
            logs: {},
        };
        try {
            const response = await this.api
                .post(`cmd/validate-unloading`, dto)
                .then((res) => res === null || res === void 0 ? void 0 : res.data);
            if (!response.success)
                throw new Error(response === null || response === void 0 ? void 0 : response.message);
            dataOut.data.transaction = response.record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
};
exports.SemaiService = SemaiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService, config_1.ConfigService])
], SemaiService);
//# sourceMappingURL=semai.service.js.map