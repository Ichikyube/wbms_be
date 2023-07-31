import { SetMetadata, UseGuards, applyDecorators } from '@nestjs/common';

import { RolesGuard } from '../guards/roles.guard';
import { AtGuard } from '../guards';
import { UserRole } from 'src/accessControl/roles/types/roles.type';

export const Roles = (...roles: UserRole[]) =>
  applyDecorators(SetMetadata('roles', roles), UseGuards(AtGuard, RolesGuard));
