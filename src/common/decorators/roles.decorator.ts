import { SetMetadata, UseGuards, applyDecorators } from '@nestjs/common';
import { Role } from '@prisma/client';
import { RolesGuard } from '../guards/roles.guard';
import { AtGuard } from '../guards';

export const Roles = (...roles: Role[]) =>
  applyDecorators(SetMetadata('roles', roles), UseGuards(AtGuard, RolesGuard));
