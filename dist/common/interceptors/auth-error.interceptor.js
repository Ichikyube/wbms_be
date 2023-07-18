"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthErrorInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let AuthErrorInterceptor = exports.AuthErrorInterceptor = class AuthErrorInterceptor {
    intercept(context, next) {
        const response = context.switchToHttp().getResponse();
        return next.handle().pipe((0, rxjs_1.catchError)((error) => {
            if (error) {
                response.status(401).json({
                    statusCode: 401,
                    message: error.message,
                    timestamp: new Date().toISOString(),
                });
            }
            else {
                response.status(500).json({
                    statusCode: 500,
                    message: 'Internal server error',
                    timestamp: new Date().toISOString(),
                });
            }
            return (0, rxjs_1.throwError)(error);
        }));
    }
};
exports.AuthErrorInterceptor = AuthErrorInterceptor = __decorate([
    (0, common_1.Injectable)()
], AuthErrorInterceptor);
//# sourceMappingURL=auth-error.interceptor.js.map