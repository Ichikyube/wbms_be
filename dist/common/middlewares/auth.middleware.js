"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
let AuthMiddleware = exports.AuthMiddleware = class AuthMiddleware {
    constructor() {
        this.logger = new common_1.Logger("HTTP");
    }
    use(req, res, next) {
        const { ip, method, originalUrl } = req;
        const userAgent = req.get("user-agent") || "";
        res.on("finish", () => {
            const { statusCode } = res;
            const contentLength = res.get("content-length");
            this.logger.log(`${method} ${originalUrl} ${statusCode} ${contentLength} — ${userAgent} ${ip}`);
            if (method !== "GET") {
                this.logger.debug(`Request body — ${JSON.stringify(req.body, null, 2)}`);
            }
        });
        console.log("Request...");
        const userId = req.user["id"];
        req.userId = userId;
        if (!req.headers["authorization"]) {
            throw new common_1.UnauthorizedException();
        }
        next();
    }
};
exports.AuthMiddleware = AuthMiddleware = __decorate([
    (0, common_1.Injectable)()
], AuthMiddleware);
//# sourceMappingURL=auth.middleware.js.map