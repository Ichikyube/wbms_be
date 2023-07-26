import { Injectable } from '@nestjs/common';
import { Prisma, Role } from '@prisma/client';
import { DbService } from 'src/db/db.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleEntity } from 'src/entities/roles.entity';
import { PermissionsService } from '../permissions/permissions.service';
import { RolePermissionService } from '../role-permission/role-permission.service';

@Injectable()
export class RolesService {
  constructor(
    private permissionService: PermissionsService,
    private rolePermissionService: RolePermissionService,
    private db: DbService,
  ) {}

  getRoles(): Promise<string[]> {
    return Promise.resolve([
      'my-custom-role',
    ]);
  }

  async createRole(createRoleDto: CreateRoleDto,  userId: string): Promise<any> {
    const { name, rolePermission } = createRoleDto;

    let role = await this.db.role.findMany({
      where: {
        name: {
          equals: createRoleDto.name,
        },
      },
    });
    if (!role) {
      const roleData = { name };
      const rolePermissionsData = rolePermission.map(permission => ({
        resourceId: permission.resourceId,
        permissions: permission.permissions,
      }));
  
      role = await this.db.role.create({
        data: {
          ...roleData,
          rolePermission: {
            createMany: {
              data: rolePermissionsData.map(permissionData => ({
                ...permissionData,
                permissions: {
                  createMany: {
                    data: permissionData.permissions,
                  },
                },
              })),
            },
          },
          userCreated: userId,
          userModified: '',
        },
        include: {
          rolePermission: {
            include: {
              permissions: true,
            },
          },
        },
      });
    }
    return role;
  }

  async findRoleById(id: number): Promise<RoleEntity | null> {
    return this.db.role.findUnique({
      where: { id },
      include: {
        rolePermission: true,
        users: true,
      },
    });
  }

  async updateRole(
    id: number,
    data: Prisma.RoleUpdateInput,
  ): Promise<RoleEntity> {
    return this.db.role.update({
      where: { id },
      data,
    });
  }

  async deleteRole(id: number): Promise<RoleEntity> {
    return this.db.role.delete({
      where: { id },
    });
  }

  async findAllRoles(): Promise<RoleEntity[]> {
    return this.db.role.findMany({
      include: {
        rolePermission: true,
        users: true,
      },
    });
  }
}
