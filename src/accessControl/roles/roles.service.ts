import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleEntity } from 'src/entities/roles.entity';
import { RolesBuilder } from 'nest-access-control';
import { action } from 'src/entities/grant.entity';
const fs = require('fs');

@Injectable()
export class RolesService {
  constructor(
    private db: DbService,
  ) {}

  async getRoles(): Promise<any[]> {
    const roles = await this.db.role.findMany({
        include: {
          permissions: {
            include: {
              grants: {
                include: {
                  attributes: true,
                },
              }
            },
          },
        },
    });

    return roles;
  }

  async updateAC() {
    const roles = await this.getRoles();
    
    // const ac = JSON.stringify(roles);
    const parsedAc = await this.parseData(roles)
    fs.writeFileSync('./rbac-policy.json', parsedAc);
  }
 
  async parseData(data) {
    const result = {};
  
    for (const permission of data.permissions) {
      const resource = permission.resource;
      const rolePermissions = {};
  
      for (const grant of permission.grants) {
        const action = grant.action.toLowerCase();
        const possession = grant.possession.toLowerCase();
        const key = `${action}:${possession}`;
  
        if (!rolePermissions[key]) {
          rolePermissions[key] = [];
        }
  
        rolePermissions[key] = rolePermissions[key].concat(grant.attributes);
      }
  
      result[resource] = rolePermissions;
    }
  
    return result;
  }

  async createRole(createRoleDto: CreateRoleDto, userId: string): Promise<any> {
    const { name, permissions } = createRoleDto;

    let role = await this.db.role.findUnique({
      where: { name },
      include: { 
        permissions: { 
          include: {
            grants: { 
              include: { 
                attributes: true,
              } 
            },
          },
        }
      },
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
      console.log(permissionsData)
      for(let i =0; i < permissionsData.length; i++) {
        // const grantsData = 
        await this.db.permission.create({
          data: {
              roleId: newRole.id,
              resource: permissionsData[i].resource,
              grants: {
                create: permissionsData[i].grants.map(({ action, possession, attributes }) => ({
                  action,
                  possession,
                  attributes: {
                    create: attributes.map(({attr}) => ({
                        attr,
                      }))
                  }
                })),
              },
              userCreated: userId,
              userModified: '',
            },
            include: {
              grants: {
                include: {
                  attributes: true,
                }
              },
            },
        })
      }
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

  async updateRole(id: number, data: Prisma.RoleUpdateInput): Promise<RoleEntity> {
    const editRole = await this.db.role.update({
      where: { id },
      data,
      include: {
        permissions: {
          include: {
            grants: true,
          }
        }
      }
    });
    await this.updateAC();
    return editRole;
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
  
}
