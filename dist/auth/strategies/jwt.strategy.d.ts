import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { DbService } from 'src/db/db.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private db;
    constructor(config: ConfigService, db: DbService);
    validate(payload: {
        sub: string;
        username: string;
    }): Promise<{
        id: string;
        username: string;
        email: string;
        role: import(".prisma/client").UserRole;
    }>;
}
export {};
