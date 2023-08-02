import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt/dist';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AtStrategy, JwtStrategy, RtStrategy } from './strategies';
import { UsersModule } from 'src/users/users.module';
import { LdapStrategy } from './strategies/ldap.strategy';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({}),
    // PassportModule,
    PassportModule.register({ defaultStrategy: 'ldapAuth' }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, RtStrategy, AtStrategy, LdapStrategy],
  // exports: [PassportModule],
  exports: [PassportModule.register({ defaultStrategy: 'ldapAuth' })],
})
export class AuthModule {}
