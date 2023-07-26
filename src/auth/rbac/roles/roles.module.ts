import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { PermissionsModule } from '../permissions/permissions.module';
import { RolePermissionModule } from '../role-permission/role-permission.module';
import { PermissionsService } from '../permissions/permissions.service';
import { RolePermissionService } from '../role-permission/role-permission.service';

@Module({
  imports: [PermissionsModule, RolePermissionModule],
  controllers: [RolesController],
  providers: [RolesService, PermissionsService, RolePermissionService],
})
export class RolesModule {}

