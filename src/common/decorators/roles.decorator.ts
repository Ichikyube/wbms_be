import { SetMetadata, UseGuards, applyDecorators } from "@nestjs/common";
import { UserRole } from "@prisma/client";
import { RolesGuard } from "../guards/roles.guard";
import { AtGuard } from "../guards";

export const Roles = (...roles: UserRole[]) => applyDecorators(SetMetadata("roles", roles),
UseGuards(AtGuard, RolesGuard));
