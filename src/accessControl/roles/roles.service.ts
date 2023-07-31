import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleEntity } from 'src/entities/roles.entity';
import { RolesBuilder } from 'nest-access-control';
const fs = require('fs');

@Injectable()
export class RolesService {
  constructor(
    private db: DbService,
  ) {}

  async getRoles(): Promise<any[]> {
    const roles = await this.db.role.findMany({
        // where: {},
        include: {
          permissions: {
            include: {
              grants: true,
            },
          },
        },
    });

    return roles;
  }

  async updateAC() {
    const roles = await this.getRoles();
    //console.log(this.mapToGrantsObject(roles))
    const ac = JSON.stringify(roles);
    fs.writeFileSync('./rbac-policy.json', ac);
  }
 
  async generateAC(): Promise<RolesBuilder> {
    const roles = await this.getRoles();
    console.log(roles)
    let result = roles.map(role => {
      return role.permissions.map(permission => {
        let { action, possession, attributes } = permission.grant
        let resource =role.permission.resource
        return { role: role.name, resource, action, possession, attributes }
      })
    })
    if (result) {
      let grants = []
      result.forEach((grant) => grants = grants.concat(grant))

      const ac = JSON.stringify(roles);
      fs.writeFileSync('./rbac-policy.json', ac);
      return new RolesBuilder(grants)
    }
    return new RolesBuilder([])
  }
  
  async mapToGrantsObject(jsonData) {
    if (typeof jsonData === "object" && !Array.isArray(jsonData)) {
      const result = {};
      for (const [key, value] of Object.entries(jsonData)) {
        result[key] = this.mapToGrantsObject(value);
      }
      return result;
    } else if (Array.isArray(jsonData)) {
      const permissions = jsonData.map(permission => {
        const action = permission.action;
        const possession = permission.possession;
        const attributes = permission.attributes.join(",");
        return `${action}:${possession}:${attributes}`;
      });
      return { permissions };
    } else {
      return jsonData;
    }
  }
 
  async createRole(createRoleDto: CreateRoleDto, userId: string): Promise<any> {
    const { name, permissions } = createRoleDto;

    let role = await this.db.role.findFirst({
      where: {
        name: {
          equals: createRoleDto.name,
        },
      },
    });
    if (role) {
      throw new HttpException('Role already exists', HttpStatus.BAD_REQUEST);
    }
    const permissionsData = permissions.map((permission) => ({
      resource: permission.resource,
      permissions: permission.grants,
    }));
    try {
      const newRole = await this.db.role.create({
        data: {
          name,
          userCreated: userId,
          userModified: '',
        },
      });
      for(let i =0; i < permissionsData.length; i++) {
        await this.db.permission.create({
          data: {
              roleId: newRole.id,
              resource: permissionsData[i].resource,
              grants: {
                createMany: {
                  data: permissionsData[i].permissions,
                },
              },
              userCreated: userId,
              userModified: '',
            },
            include: {
              grants: true,
            },
        })
      }
      const mo = await this.generateAC();
      console.log(mo)
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
