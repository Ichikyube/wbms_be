import { NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
export declare class AuthMiddleware implements NestMiddleware {
    use(req: Request & {
        userId: number;
    }, res: Response, next: NextFunction): void;
}
