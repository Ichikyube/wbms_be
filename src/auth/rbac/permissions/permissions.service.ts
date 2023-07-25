// permissions.service.ts

import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
import { PermissionAction } from './permission.interface';
import { PermissionEntity } from 'src/entities/permission.entity';

@Injectable()
export class PermissionsService {
  constructor(private readonly db: DbService) {}

  async findPermissionById(id: number): Promise<PermissionEntity | null> {
    return this.db.permission.findUnique({
      where: { id },
    });
  }

  async updatePermission(
    id: number,
    data: Prisma.PermissionUpdateInput & { object: PermissionAction },
  ): Promise<PermissionEntity> {
    return this.db.permission.update({
      where: { id },
      data,
    });
  }

  async deletePermission(id: number): Promise<PermissionEntity> {
    return this.db.permission.delete({
      where: { id },
    });
  }

  async findAllPermissions(): Promise<PermissionEntity[]> {
    return this.db.permission.findMany();
  }
}
