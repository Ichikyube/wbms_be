"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const _1 = require("./");
class UpdateCustomerDto extends (0, swagger_1.PartialType)(_1.CreateCustomerDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateCustomerDto = UpdateCustomerDto;
//# sourceMappingURL=update-customer.dto.js.map