import { Injectable, Module } from '@nestjs/common';
import { AccessControlModule, RolesBuilder } from 'nest-access-control';
import { RolesService } from './roles/roles.service';


@Module({
  imports: [
    AccessControlModule.forRootAsync({
      inject: [RolesService],
      useFactory: async (roleService: RolesService): Promise<RolesBuilder> => {
        return new RolesBuilder(await roleService.getRoles());
      },
    }),
  ],
})
export class RbacModule {}

