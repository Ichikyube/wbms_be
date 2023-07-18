import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { Request } from 'express';
declare const RtStrategy_base: new (...args: any[]) => Strategy;
export declare class RtStrategy extends RtStrategy_base {
    constructor(config: ConfigService);
    private static extractJWT;
    validate(req: Request, payload: {
        sub: string;
        username: string;
    }): Promise<{
        refreshToken: any;
        sub: string;
        username: string;
    }>;
}
export {};
