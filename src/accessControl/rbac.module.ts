import { Injectable, Module } from '@nestjs/common';
import { AccessControlModule, RolesBuilder } from 'nest-access-control';
import { RolesService } from './roles/roles.service';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    RolesModule,
    AccessControlModule.forRootAsync({
      imports: [RolesModule],
      inject: [RolesService],
      useFactory: async (roleService: RolesService): Promise<RolesBuilder> => {
        return new RolesBuilder(await roleService.getRoles());
      },
    }),
  ],
  providers: [RolesService]
})
export class RbacModule {}

