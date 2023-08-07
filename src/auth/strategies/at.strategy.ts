import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Request } from "express";

import { DbService } from "src/db/db.service";
import { JwtPayload } from "../types/jwtPayload.type";

@Injectable()
export class AtStrategy extends PassportStrategy(Strategy, "jwt-access") {
  constructor(
    config: ConfigService,
    private db: DbService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        AtStrategy.extractJWT,
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      ignoreExpiration: false,
      secretOrKey: config.get("WBMS_JWT_AT_KEY"),
    });
  }

  private static extractJWT(req: Request): string | null {
    if (req.cookies && "at" in req.cookies) return req.cookies.at;

    return null;
  }

  async validate(payload: JwtPayload) {
    return payload;
  }
}
