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

  async createRole(data: CreateRoleDto): Promise<RoleEntity> {
    let role = await this.db.role.findMany({
      where: {
        name: {
          equals: data.name,
        },
      },
    });
    if (!role) {
      role = await this.db.role.create({
        data: {
          ...roleData,
          rolePermissions: {
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
        },
        include: {
          rolePermissions: {
            include: {
              permissions: true,
            },
          },
        },
      });
    }


    

    return role;
    const params = {
      data: {
        ...data,
        userCreated: '',
        userModified: '',
      },
    };
    const record = await this.db.role.create(params);

    return record;
  }

  async findRoleById(id: number): Promise<RoleEntity | null> {
    return this.db.role.findUnique({
      where: { id },
      include: {
        Permission: true,
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
        Permission: true,
        users: true,
      },
    });
  }
}

// async findOne(id: number) {
//   let role = await this.roleRepository.findOne({ id });
//   if (!role) {
//     throw new HttpException('Item does not exist!', HttpStatus.NOT_FOUND);
//   }
//   return role;
// }

// async update(updateRoleInput: UpdateRoleInput) {
//   let role = await this.roleRepository.findOne({ id: updateRoleInput.id });
//   if (!role) {
//     throw new HttpException('Item does not exist!', HttpStatus.NOT_FOUND);
//   }
//   role.name = updateRoleInput.name;
//   if (updateRoleInput.permissions)
//     role.permissions = await this.permissionService.findMany(
//       updateRoleInput.permissions,
//     );
//   return this.roleRepository.save(role);
// }

// async remove(id: number) {
//   let role = await this.roleRepository.findOne({ id });
//   if (!role) {
//     throw new HttpException('Item does not exist!', HttpStatus.NOT_FOUND);
//   }
//   return await this.roleRepository.remove(role);
// }

// async getRolePermissions(id: number) {
//   let user = await this.roleRepository.findOne({
//     where: { id },
//     relations: ['permissions'],
//   });
//   return user.permissions;
// }
// }

// async findAllAsMap(): Promise<Map<string, Role>> {
//   const entities = await this.db.role.findMany();

//   const rolesMap: Map<string, Role> = new Map();
//   entities.forEach((entity) => {
//     rolesMap.set(entity.name, entity);
//   });

//   return rolesMap;
// }

// async findAll(query?: FindOptions): Promise<Array<User>> {
//   this.logger.info('UsersService#findAll.call', query)

//   const result: Array<User> = await this.repo.findAll(query)

//   this.logger.info('UsersService#findAll.result', result)

//   return result
// }

// async count(query?: FindOptions): Promise<number> {
//   this.logger.info('UsersService#count.call', query)

//   const result: number = await this.repo.count(query)

//   this.logger.info('UsersService#count.result', result)

//   return result
// }

// async create(userDto: UserDto): Promise<User> {
//   this.logger.info('UsersService#create.call', userDto)

//   const user = new User(userDto)

//   const result = await user.save()

//   this.logger.info('UsersService#create.result', result)

//   return result
// }
