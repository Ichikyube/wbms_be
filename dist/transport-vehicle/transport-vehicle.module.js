"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportVehicleModule = void 0;
const common_1 = require("@nestjs/common");
const transport_vehicle_service_1 = require("./transport-vehicle.service");
const transport_vehicle_controller_1 = require("./transport-vehicle.controller");
let TransportVehicleModule = exports.TransportVehicleModule = class TransportVehicleModule {
};
exports.TransportVehicleModule = TransportVehicleModule = __decorate([
    (0, common_1.Module)({
        controllers: [transport_vehicle_controller_1.TransportVehicleController],
        providers: [transport_vehicle_service_1.TransportVehicleService]
    })
], TransportVehicleModule);
//# sourceMappingURL=transport-vehicle.module.js.map