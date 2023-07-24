// permissions.service.ts

import { Injectable } from '@nestjs/common';
import { Prisma, Permission } from '@prisma/client';
import { DbService } from 'src/db/db.service';
import { PermissionAction } from './permission.interface';

@Injectable()
export class PermissionsService {
  constructor(private readonly db: DbService) {}

  async findPermissionById(id: number): Promise<Permission | null> {
    return this.db.permission.findUnique({
      where: { id },
    });
  }

  async updatePermission(
    id: number,
    data: Prisma.PermissionUpdateInput & { object: PermissionAction },
  ): Promise<Permission> {
    return this.db.permission.update({
      where: { id },
      data,
    });
  }

  async deletePermission(id: number): Promise<Permission> {
    return this.db.permission.delete({
      where: { id },
    });
  }

  async findAllPermissions(): Promise<Permission[]> {
    return this.db.permission.findMany();
  }
}
