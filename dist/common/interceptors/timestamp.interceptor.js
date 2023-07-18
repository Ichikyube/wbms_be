"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimestampInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let TimestampInterceptor = exports.TimestampInterceptor = class TimestampInterceptor {
    intercept(context, next) {
        const req = context.switchToHttp().getRequest();
        const userId = req.userId;
        return next.handle().pipe((0, operators_1.map)(data => {
            if (data && Array.isArray(data)) {
                data.forEach(entity => this.updateTimestamps(entity, userId));
            }
            else if (data) {
                this.updateTimestamps(data, userId);
            }
            return data;
        }));
    }
    updateTimestamps(entity, userId) {
        if (!entity.userCreated) {
            entity.userCreated = userId;
        }
        entity.userModified = userId;
    }
};
exports.TimestampInterceptor = TimestampInterceptor = __decorate([
    (0, common_1.Injectable)()
], TimestampInterceptor);
//# sourceMappingURL=timestamp.interceptor.js.map