import { join } from 'path';
import { permission } from './types/roles.type';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleEntity } from 'src/entities/roles.entity';
import { RolesBuilder } from 'nest-access-control';
import { UpdateRoleDto } from './dto/update-role.dto';
import * as fs from 'fs';
import * as _ from 'lodash';

@Injectable()
export class RolesService {
  constructor(private db: DbService) {}

  async getRoles(): Promise<any[]> {
    const roles = await this.db.role.findMany({
      where: { isDeleted: false },
      include: {
        users: {
          select: {
            id: true,
            username: true,
            nik: true,
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

  async updateAC(): Promise<any> {
    const roles = await this.db.role.findMany({
      where: { isDeleted: false },
    });

    const grants = await this.parseData(roles);

    const ac = JSON.stringify(grants);
    fs.writeFileSync('./rbac-policy.json', ac);
    return true;
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
        for (const { resource, grants } of permissions) {
          const resourcePermissions = {};

          for (const { action, possession, attributes } of grants) {
            if(action) {
              const grantKey = `${action}:${possession}`;
              const exception = attributes.map(
                (attribute) => `!${attribute.attr}`,
              );
              resourcePermissions[grantKey] = ['*', ...exception];
            }
          }
          rolePermissions[resource] = resourcePermissions;
        }
      }

      result[role] = rolePermissions;
    }

    return result;
  }

  async createRole(createRoleDto: CreateRoleDto, userId: string): Promise<any> {
    const { name, description, permissions } = createRoleDto;

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
          description,
          permissions: permissionsData.map((permission) => ({
            resource: permission.resource,
            grants: permission.grants.map(
              ({ action, possession, attributes }) => ({
                action,
                possession,
                attributes: attributes.map(({ attr }) => ({
                  attr,
                })),
              }),
            ),
          })),
          userCreated: userId,
          userModified: '',
        },
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
        users: false,
      },
    });
  }

  async updateRole(
    userId: string,
    roleId: number,
    updatedRoleData: UpdateRoleDto,
  ): Promise<RoleEntity | null> {
    const existingRole = await this.db.role.findUnique({
      where: { id: roleId },
    });

    if (!existingRole) {
      throw new Error(`Role with ID ${roleId} not found.`);
    }

    try {
      if (_.isEqual(existingRole.permissions, updatedRoleData.permissions))
        await this.db.roleArchive.create({
          data: {
            roleId: roleId,
            permissions: existingRole.permissions,
            userCreated: userId,
          },
        });
      const permissionsData = updatedRoleData.permissions.map((permission) => ({
        resource: permission.resource,
        grants: permission.grants,
      }));
      // Update the main role entity fields
      const updatedRole = await this.db.role.update({
        where: { id: roleId },
        data: {
          name: updatedRoleData.name,
          description: updatedRoleData.description,
          permissions: permissionsData.map((permission) => ({
            resource: permission.resource,
            grants: permission.grants.map(
              ({ action, possession, attributes }) => ({
                action,
                possession,
                attributes: attributes.map(({ attr }) => ({
                  attr,
                })),
              }),
            ),
          })),
          userModified: userId,
        },
      });
      await this.updateAC();
      return updatedRole;
    } catch (error) {
      console.error('Error updating role with permissions:', error);
      throw new Error('An error occurred while updating role with permissions');
    }
  }

  async deleteRole(id: number): Promise<RoleEntity> {
    const role = await this.db.role.findUnique({
      where: {
        id,
      },
    });
    if (role.name === 'Admin Master' || role.name === 'Admin System') {
      throw new Error('Cannot delete admin role');
    }

    return await this.db.role.update({
      where: { id },
      data: { isDeleted: true },
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
