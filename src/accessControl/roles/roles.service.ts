import { permission } from './roles.type';
import { possession } from './dto/create-grant.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, Role } from '@prisma/client';
import { DbService } from 'src/db/db.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleEntity } from 'src/entities/roles.entity';

@Injectable()
export class RolesService {
  constructor(
    private db: DbService,
  ) {}

  getRoles(): Promise<string[]> {
    return Promise.resolve(['my-custom-role']);
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
              },
              include: {
                grants: true,
              },
        })
      }
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
        permissions: true,
        users: true,
      },
    });
  }
}
