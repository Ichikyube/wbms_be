import { ConfigService } from "@nestjs/config";
import { Strategy } from "passport-jwt";
import { DbService } from "src/db/db.service";
import { JwtPayload } from "../types/jwtPayload.type";
declare const AtStrategy_base: new (...args: any[]) => Strategy;
export declare class AtStrategy extends AtStrategy_base {
    private db;
    constructor(config: ConfigService, db: DbService);
    private static extractJWT;
    validate(payload: JwtPayload): Promise<JwtPayload>;
}
export {};
