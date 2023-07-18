"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSemaiDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const decode_qrcode_dto_1 = require("./decode-qrcode.dto");
class UpdateSemaiDto extends (0, swagger_1.PartialType)(decode_qrcode_dto_1.DecodeQrcodeDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateSemaiDto = UpdateSemaiDto;
//# sourceMappingURL=update-semai.dto.js.map