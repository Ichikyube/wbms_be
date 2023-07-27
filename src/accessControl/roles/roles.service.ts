import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
      throw new HttpException('Rolee already exists', HttpStatus.BAD_REQUEST);
    }
    const rolePermissionsData = rolePermission.map((permission) => ({
      resource: permission.resource,
      permissions: permission.permissions,
    }));
    try {
      const newRole = await this.db.role.create({
        data: {
          name,
          rolePermission: {
            createMany: {
              data: rolePermissionsData.map((permissionData) => ({
                resource: permissionData.resource,
                permissions: {
                  createMany: {
                    data: { ...permissionData.permissions },
                  },
                },
                userCreated: userId,
                userModified: '',
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
