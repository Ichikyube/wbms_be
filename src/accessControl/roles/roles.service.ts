import { map } from 'rxjs/operators';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleEntity } from 'src/entities/roles.entity';
import { permission } from './roles.type';
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
              grants: true,
            },
          },
        },
    });

    return roles;
  }

  async updateAC() {
    const roles = await this.getRoles();
    const ac = JSON.stringify(roles);
    fs.writeFileSync('./src/accessControl/rbac-policy.json', ac);
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
  
  async generateAC() {
    const roles = await this.getRoles();
    
    // Create an empty object to store the mapped values
    const grantsObject = this.mapToGrantsObject(roles);
    // Map the JSON values to create the new object
    // Object.keys(roles).forEach((role) => {
    //   role.name:
    //   const mappedValue = roles[role]; // Keep the original value or modify it as needed
    //   grantsObject[role] = mappedValue;
    // });

    console.log(grantsObject);
    // const grantsObject = roles.map((role) => {
    //   return {
    //     [role.name]: role.permissions.map(permission => {
    //       [permission.resource]:  permission.map(grant=> {
    //         return [grant.action]:[grant.possesion]: 
          
    //       })
    //       })
          
    //       // [permission.resource]:{
    //       //   [permission.grants.map((grant) => grant.name)]: true
    //       // }),
    //       // grants: role.permissions.map((permission) =>
    //       //   permission.grants.map((grant) => grant.name),
          
        
    //   };
    // });
  }
  async createRole(createRoleDto: CreateRoleDto, userId: string): Promise<any> {
    const { name, rolePermission } = createRoleDto;

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
    const rolePermissionsData = rolePermission.map((permission) => ({
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
      for(let i =0; i < rolePermissionsData.length; i++) {
        await this.db.permission.create({
          data: {
              roleId: newRole.id,
              resource: rolePermissionsData[i].resource,
              grants: {
                createMany: {
                  data: rolePermissionsData[i].permissions,
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
