import { BaseRole as PrismaBaseRole } from '@prisma/client';

export const UserRole = {
ADMIN: PrismaBaseRole.Administrator,
STAFF: PrismaBaseRole.Staff,
SUPERVISOR: PrismaBaseRole.Supervisor,
MANAGER:  PrismaBaseRole.Manager,
MILL_HEAD: PrismaBaseRole.MillHead,
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];