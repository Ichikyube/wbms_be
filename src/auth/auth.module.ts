import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt/dist";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { AtStrategy, JwtStrategy, RtStrategy } from "./strategies";
import { UsersModule } from "src/users/users.module";
import { LdapStrategy } from "./strategies/ldap.strategy";
import { RbacModule } from './rbac/rbac.module';


@Module({
  imports: [
    UsersModule,
    JwtModule.register({}),
    PassportModule.register({ defaultStrategy: "ldap" }),
    RbacModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, RtStrategy, AtStrategy, LdapStrategy],
  exports: [PassportModule],
})
export class AuthModule {}
