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
  providers: [RolesService],
})
export class RbacModule {}

// This is actually how the grants are maintained internally.
// const ac = new AccessControl(grantsObject);
// ac.setGrants(grantsObject);
// console.log(ac.getGrants());
// let grantsObject = {
//   admin: {
//     video: {
//       'create:any': ['*', '!views'],
//       'read:any': ['*'],
//       'update:any': ['*', '!views'],
//       'delete:any': ['*'],
//     },
//   },
//   user: {
//     video: {
//       'create:own': ['*', '!rating', '!views'],
//       'read:own': ['*'],
//       'update:own': ['*', '!rating', '!views'],
//       'delete:own': ['*'],
//     },
//   },
// };
// const ac = new AccessControl(grantsObject);
