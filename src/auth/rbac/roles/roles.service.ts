import { Injectable } from '@nestjs/common';
import { Prisma, Role } from '@prisma/client';
import { DbService } from 'src/db/db.service';

@Injectable()
export class RolesService {
  constructor(private readonly db: DbService) {}

  async createRole(data: Prisma.RoleCreateInput): Promise<Role> {
    return this.db.role.create({
      data,
    });
  }

// async createRole(name: string): Promise<Role> {
//   const role = new Role();
//   role.name = name;
//   return await this.roleRepository.save(role);
// }
// async findByName(role: RoleEnum): Promise<Role | null> {
//   return this.db.role.findUnique({
//     where: {
//       name: role,
//     },
//   });
// }
  async findRoleById(id: number): Promise<Role | null> {
    return this.db.role.findUnique({
      where: { id },
      include: {
        RolePermission: true,
        users: true,
      },
    });
  }

  async updateRole(id: number, data: Prisma.RoleUpdateInput): Promise<Role> {
    return this.db.role.update({
      where: { id },
      data,
    });
  }

  async deleteRole(id: number): Promise<Role> {
    return this.db.role.delete({
      where: { id },
    });
  }

  async findAllRoles(): Promise<Role[]> {
    return this.db.role.findMany({
      include: {
        RolePermission: true,
        users: true,
      },
    });
  }
}


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
