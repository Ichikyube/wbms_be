"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCurrentUser = void 0;
const common_1 = require("@nestjs/common");
exports.GetCurrentUser = (0, common_1.createParamDecorator)((data, context) => {
    const { user } = context.switchToHttp().getRequest();
    if (data) {
        return user[data];
    }
    return user;
});
//# sourceMappingURL=getCurrentUser.decorator.js.map