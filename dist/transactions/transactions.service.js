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
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const db_service_1 = require("../db/db.service");
const moment = require("moment");
const semai_service_1 = require("../semai/semai.service");
const configs_service_1 = require("../configs/configs.service");
const draft_transaction_dto_1 = require("./dto/draft-transaction.dto");
let TransactionService = exports.TransactionService = class TransactionService {
    constructor(db, config, semaiAPI, configWbms) {
        this.db = db;
        this.config = config;
        this.semaiAPI = semaiAPI;
        this.configWbms = configWbms;
    }
    async getAll() {
        const dataOut = {
            status: true,
            message: '',
            page: 0,
            totalRecords: 0,
            records: {},
            logs: {}
        };
        try {
            const records = await this.db.transaction.findMany();
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
            logs: {}
        };
        try {
            const records = await this.db.transaction.findMany(Object.assign({}, query));
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
            logs: {}
        };
        try {
            const record = await this.db.transaction.findFirst(Object.assign({}, query));
            dataOut.record = record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    async openCreateByQrcodeSemai(body) {
        const dataOut = {
            status: true,
            message: '',
            data: {
                transaction: {},
                tType: '',
                urlPath: ''
            },
            logs: {}
        };
        const { content, tType } = body;
        try {
            const response = await this.semaiAPI.decodeQrcode({ content });
            if (!response.status) {
                dataOut.status = false;
                dataOut.message = response.message;
                dataOut.logs = response.logs;
                return dataOut;
            }
            const decodedQrcode = response.data.decodedQrcode;
            decodedQrcode.deliveryStatus = decodedQrcode.deliveryStatus || 0;
            const statusMapping = this.configWbms.TransactionValidation();
            const urlMapping = this.configWbms.WbTransactionUrlMapping();
            try {
                dataOut.data.tType = statusMapping[tType][decodedQrcode.vehicleOperationStatus][decodedQrcode.deliveryStatus];
                dataOut.data.urlPath = urlMapping[tType][decodedQrcode.vehicleOperationStatus][decodedQrcode.deliveryStatus];
            }
            catch (error) {
                throw new Error('Backend: Vehicle Operation Status atau Delivery Status tidak valid.');
            }
            const transaction = this.copyQrToTransaction(decodedQrcode, tType);
            const dtTransaction = await this.searchFirst({
                where: {
                    transportVehiclePlateNo: transaction.transportVehiclePlateNo,
                    progressStatus: { not: 15 },
                    tType
                },
                orderBy: { bonTripNo: 'desc' }
            }).then((res) => res.record);
            dataOut.data.transaction = transaction;
            console.log(dataOut.data);
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    async searchByQR(query) {
        const dataOut = {
            status: true,
            message: '',
            data: {},
            logs: {}
        };
        const { content, tType } = query;
        try {
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
        }
        return dataOut;
    }
    async getByPlateNo(query) {
        const dataOut = {
            status: true,
            message: '',
            page: 0,
            totalRecords: 0,
            record: {},
            logs: {}
        };
        const { key, sort = 'asc' } = query;
        try {
            const record = await this.db.transaction.findFirst({
                where: { transportVehiclePlateNo: key },
                orderBy: { id: sort }
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
    async getById(id) {
        const dataOut = {
            status: true,
            message: '',
            page: 0,
            totalRecords: 0,
            record: {},
            logs: {}
        };
        try {
            const record = await this.db.transaction.findUnique({
                where: { id }
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
            logs: {}
        };
        try {
            console.log('create new data:');
            console.log(dto);
            const record = await this.db.transaction.create({
                data: Object.assign(Object.assign({}, dto), { userCreated: '', userModified: '' })
            });
            dataOut.record = record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
            throw error;
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
            logs: {}
        };
        try {
            const record = await this.db.transaction.update({
                where: { id },
                data: Object.assign(Object.assign({}, dto), { userModified: '' })
            });
            dataOut.record = record;
        }
        catch (error) {
            dataOut.status = false;
            dataOut.message = error.message;
            dataOut.logs = { error };
            throw error;
        }
        return dataOut;
    }
    copyQrToTransaction(dto, tType) {
        const transaction = new draft_transaction_dto_1.DraftTransactionDto();
        transaction.tType = tType;
        transaction.bonTripNo = dto.externalRefNo;
        transaction.vehicleStatus = dto.vehicleOperationStatus;
        transaction.deliveryStatus = dto.deliveryStatus || 0;
        transaction.progressStatus = 0;
        transaction.deliveryOrderId = dto === null || dto === void 0 ? void 0 : dto.deliveryOrderId;
        transaction.deliveryOrderNo = dto === null || dto === void 0 ? void 0 : dto.deliveryOrderNo;
        transaction.deliveryDate = dto.deliveryDate ? moment(dto === null || dto === void 0 ? void 0 : dto.deliveryDate).toDate() : null;
        transaction.transporterCompanyCode = dto.transporterCompanyCode;
        transaction.transporterCompanyName = dto.transporterCompanyFullName;
        transaction.driverNik = dto.driverCitizenNo;
        transaction.driverName = dto.driverFullName;
        transaction.driverLicenseNo = dto.drivingLicenceNo;
        transaction.transportVehiclePlateNo = dto.vehiclePlateNo;
        transaction.transportVehicleProductCode = dto.vehicleProductCode;
        transaction.transportVehicleProductName = dto.vehicleProductName;
        transaction.transportVehicleSccModel = dto.vehicleAllowableSccModel;
        transaction.originWeighInKg = dto.originWeighInKg || 0;
        transaction.originWeighInRemark = dto.originWeighInRemark;
        transaction.originWeighInOperatorName = dto.originWeighInOperatorName;
        transaction.originWeighInTimestamp = dto.originWeighInTimestamp
            ? moment(dto.originWeighInTimestamp).toDate()
            : null;
        transaction.originWeighOutKg = dto.originWeighOutKg || 0;
        transaction.originWeighOutRemark = dto.originWeighOutRemark;
        transaction.originWeighOutOperatorName = dto.originWeighOutOperatorName;
        transaction.originWeighOutTimestamp = dto.originWeighOutTimestamp
            ? moment(dto.originWeighOutTimestamp).toDate()
            : null;
        transaction.potonganWajib = 0;
        transaction.potonganLain = 0;
        transaction.returnWeighInKg = dto.returnWeighInKg || 0;
        transaction.returnWeighInRemark = dto.returnWeighInRemark;
        transaction.returnWeighInOperatorName = dto.returnWeighInOperatorName;
        transaction.returnWeighInTimestamp = dto.returnWeighInTimestamp
            ? moment(dto.returnWeighInTimestamp).toDate()
            : null;
        transaction.returnWeighOutKg = dto.returnWeighOutKg || 0;
        transaction.returnWeighOutRemark = dto.returnWeighOutRemark;
        transaction.returnWeighOutOperatorName = dto.returnWeighOutOperatorName;
        transaction.returnWeighOutTimestamp = dto.returnWeighOutTimestamp
            ? moment(dto.returnWeighOutTimestamp).toDate()
            : null;
        transaction.currentSeal1 = dto.currentSeal1;
        transaction.currentSeal2 = dto.currentSeal2;
        transaction.currentSeal3 = dto.currentSeal3;
        transaction.currentSeal4 = dto.currentSeal4;
        transaction.jsonData = dto;
        return transaction;
    }
};
exports.TransactionService = TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService,
        config_1.ConfigService,
        semai_service_1.SemaiService,
        configs_service_1.ConfigsService])
], TransactionService);
//# sourceMappingURL=transactions.service.js.map