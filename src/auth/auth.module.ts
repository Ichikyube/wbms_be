import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt/dist';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AtStrategy, JwtStrategy, RtStrategy } from './strategies';
import { UsersModule } from 'src/users/users.module';
import { LdapStrategy } from './strategies/ldap.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LdapAuthService } from './ldap-auth/ldap-auth.service';

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('WBMS_JWT_KEY'),
        signOptions: { expiresIn: '60s' },
      }),
      inject: [ConfigService],
    }),
    PassportModule,
    // PassportModule.register({ defaultStrategy: 'ldapAuth' }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, RtStrategy, AtStrategy, LdapStrategy, LdapAuthService],
  exports: [PassportModule],
  // exports: [PassportModule.register({ defaultStrategy: 'ldapAuth' })],
})
export class AuthModule {}
