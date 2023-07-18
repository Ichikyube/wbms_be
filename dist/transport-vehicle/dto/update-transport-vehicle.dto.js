"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTransportVehicleDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_transport_vehicle_dto_1 = require("./create-transport-vehicle.dto");
class UpdateTransportVehicleDto extends (0, swagger_1.PartialType)(create_transport_vehicle_dto_1.CreateTransportVehicleDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateTransportVehicleDto = UpdateTransportVehicleDto;
//# sourceMappingURL=update-transport-vehicle.dto.js.map