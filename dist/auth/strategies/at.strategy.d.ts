import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { DbService } from 'src/db/db.service';
type JwtPayload = {
    sub: string;
    username: string;
    iat: any;
    exp: any;
};
declare const AtStrategy_base: new (...args: any[]) => Strategy;
export declare class AtStrategy extends AtStrategy_base {
    private db;
    constructor(config: ConfigService, db: DbService);
    private static extractJWT;
    validate(payload: JwtPayload): Promise<{
        id: string;
        username: string;
        email: string;
        role: import(".prisma/client").UserRole;
    }>;
}
export {};
