import { Module } from '@nestjs/common';
import { PermissionsModule } from './permissions/permissions.module';
import { RolesModule } from './roles/roles.module';
import { AccessZoneModule } from './access-zone/access-zone.module';

@Module({
  imports: [PermissionsModule, RolesModule, AccessZoneModule]
})
export class RbacModule {}
