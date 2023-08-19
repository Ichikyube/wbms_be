import { join } from 'path';
import { permission } from './types/roles.type';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleEntity } from 'src/entities/roles.entity';
import { RolesBuilder } from 'nest-access-control';
import { GrantEntity, action } from 'src/entities/grant.entity';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PermissionEntity } from 'src/entities/permission.entity';
const fs = require('fs');

@Injectable()
export class RolesService {
  constructor(private db: DbService) {}

  async getRoles(): Promise<any[]> {
    const roles = await this.db.role.findMany({
      include: {
        permissions: {
          include: {
            grants: {
              include: {
                attributes: true,
              },
            },
          },
        },
      },
    });

    return roles;
  }

  async getRoleByName(name: string): Promise<RoleEntity | null> {
    return this.db.role.findUnique({
      where: { name },
    });
  }

  async getRoleById(id: number): Promise<RoleEntity | null> {
    return this.db.role.findUnique({
      where: { id },
    });
  }

  async getRoleByUserId(userId: string): Promise<RoleEntity | null> {
    const user = await this.db.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return null;
    }
    return this.db.role.findUnique({
      where: { id: user.roleId },
    });
  }

  async updateAC(): Promise<RolesBuilder> {
    const roles = await this.getRoles();
    const grants = await this.parseData(roles);
    const ac = JSON.stringify(grants);
    await fs.writeFileSync('./rbac-policy.json', ac);

    return new RolesBuilder(grants);
  }

  async parseData(data) {
    const result = {};
    for (const item of data) {
      const role = item.name;
      const permissions = item.permissions;
      const rolePermissions = {};
      if (Object.keys(permissions).length === 0) {
        result[role] = rolePermissions;
        continue;
      }
      if (Object.keys(permissions).length > 0) {
        for (const permission of permissions) {
          const { resource, grants } = permission;
          const resourcePermissions = {};

          for (const grant of grants) {
            const { action, possession, attributes } = grant;
            const grantKey = `${action}:${possession}`;
            const exception = attributes.map(
              (attribute) => `!${attribute.attr}`,
            );
            resourcePermissions[grantKey] = ['*', ...exception];
          }

          rolePermissions[resource] = resourcePermissions;
        }
      }

      result[role] = rolePermissions;
    }

    return result;
  }

  async createRole(createRoleDto: CreateRoleDto, userId: string): Promise<any> {
    const { name, permissions } = createRoleDto;

    let role = await this.db.role.findUnique({
      where: { name },
    });
    if (role) {
      throw new HttpException('Role already exists', HttpStatus.BAD_REQUEST);
    }

    const permissionsData = permissions.map((permission) => ({
      resource: permission.resource,
      grants: permission.grants,
    }));

    try {
      const newRole = await this.db.role.create({
        data: {
          name,
          userCreated: userId,
          userModified: '',
        },
      });
      permissionsData.forEach(async (permission) => {
        await this.db.permission.create({
          data: {
            role: {
              connect: {
                id: newRole.id,
              },
            },
            resource: permission.resource,
            grants: {
              create: permission.grants.map(
                ({ action, possession, attributes }) => ({
                  action,
                  possession,
                  attributes: {
                    create: attributes.map(({ attr }) => ({
                      attr,
                    })),
                  },
                  userCreated: userId,
                  userModified: '',
                }),
              ),
            },
            userCreated: userId,
            userModified: '',
          },
        });
      });
      await this.updateAC();
      return newRole;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        console.log('Missing properties:', e.meta.target); // e.meta.target contains the missing properties
      }
      throw e;
    }
  }

  async findRoleById(id: number): Promise<RoleEntity | null> {
    return this.db.role.findUnique({
      where: { id },
      include: {
        permissions: true,
        users: false,
      },
    });
  }
  async updateRole(
    userId,
    roleId: number,
    updatedRoleData: RoleEntity,
  ): Promise<any | null> {
    try {
      const existingRole = await this.db.role.findUnique({
        where: { id: roleId },
        include: { permissions: { include: { grants: true } } },
      });

      if (!existingRole) {
        throw new Error(`Role with ID ${roleId} not found.`);
      }

      for (const permission of updatedRoleData.permissions) {
        const { id, ...rest } = permission;

        this.updateUpsertPermission(userId, permission);
      }
      // Update the main role entity fields
      const updatedRole = await this.db.role.update({
        where: { id: roleId },
        data: {
          name: updatedRoleData.name,
        },
        include: { permissions: { include: { grants: true } } },
      });

      return updatedRole;
    } catch (error) {
      console.error('Error updating role with permissions:', error);
      throw new Error('An error occurred while updating role with permissions');
    }
  }

  async updateUpsertPermission(
    userId,
    permissionData: PermissionEntity,
  ): Promise<PermissionEntity> {
    try {
      const existingPermission = await this.db.permission.findUnique({
        where: { id: permissionData.id },
      });

      if (existingPermission) {
        // Permission exists, perform an update
        return await this.db.permission.update({
          where: { id: permissionData.id },
          data: {
            resource: permissionData.resource,
            roleId: permissionData.roleId,
            userModified: permissionData.userModified,
            dtModified: permissionData.dtModified,
            grants: {
              upsert: permissionData.grants.map((grantData) => ({
                where: { id: grantData.id },
                update: {
                  action: grantData.action,
                  possession: grantData.possession,
                  attributes: {
                    create: grantData.attributes.map(({ attr }) => ({
                      attr,
                    })),
                  },
                  userModified: userId,
                },
                create: {
                  action: grantData.action,
                  possession: grantData.possession,
                  attributes: {
                    create: grantData.attributes.map(({ attr }) => ({
                      attr,
                    })),
                  },
                  userModified: userId,
                },
              })),
            },
          },
        });
      } else {
        // Permission doesn't exist, perform a create
        return await this.db.permission.create({
          data: {
            resource: permissionData.resource,
            roleId: permissionData.roleId,
            userCreated: permissionData.userCreated,
            userModified: permissionData.userModified,
            dtCreated: permissionData.dtCreated,
            dtModified: permissionData.dtModified,
            grants: {
              create: permissionData.grants.map(
                ({ action, possession, attributes }) => ({
                  action,
                  possession,
                  attributes: {
                    create: attributes.map(({ attr }) => ({
                      attr,
                    })),
                  },
                  userModified: userId,
                }),
              ),
            },
          },
        });
      }
    } catch (error) {
      console.error('Error updating or upserting permission:', error);
      throw new Error(
        'An error occurred while updating or upserting permission',
      );
    }
  }

  async deleteRole(id: number): Promise<RoleEntity> {
    return this.db.role.delete({
      where: { id },
    });
  }

  async assignRoleToUser(userId: string, roleId: number): Promise<any> {
    return this.db.user.update({
      where: { id: userId },
      data: {
        roleId,
      },
    });
  }

  async removeRoleFromUser(userId: string): Promise<any> {
    return this.db.user.update({
      where: { id: userId },
      data: {
        roleId: null,
      },
    });
  }
}
