import { Roles } from './roles.decorator';
import { RolesGuard } from '../guards/roles.guard';
import { AtGuard } from '../guards/at.guard';
import { applyDecorators, UseGuards } from '@nestjs/common';
import { UserRole } from '@prisma/client';

export const Auth = (roles?: UserRole[]) => {
  if (!roles?.length) return applyDecorators(UseGuards(AtGuard));
  return applyDecorators(Roles(...roles), UseGuards(AtGuard, RolesGuard));
};
