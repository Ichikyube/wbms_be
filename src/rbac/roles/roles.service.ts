import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateRoleDto, UpdateRoleDto } from './dto/role.dto';
import { ListRoleRequestDto } from './dto/role.request.dto';
@Injectable()
export class RolesService {
  constructor(
    private db: DbService,
  ) {}
  async create(role: any) {
    return await this.db.role.create(role);
  }

  async getRoles(roleRequestDto: ListRoleRequestDto) {
    return await this.db.role.findMany(roleRequestDto);
  }

  async getRole(roleId: number) {
    return await this.db.role.findUnique({
      where: { id: roleId },
    });
  }

  // async updateRole(roleId: string, role: any, userId: string) {
  //   const params = {
  //     where: { id:roleId },
  //     data: { ...role, userModified: userId },
  //   };
  //   return await this.db.role.update(params);
  // }

  // async deleteRole(roleId: string) {
  //   return await this.db.role.findByIdAndDelete(roleId);
  // }

  // async updateUserToRole(roleId: string, userId: string) {
  //   return await this.db.role.findByIdAndUpdate(roleId, {
  //     $push: { users: userId },
  //   });
  // }

  // async assignFeaturePermissionToRole(
  //   roleId: string,
  //   assignFeaturePermissionToRole: AssignFeaturePermissionToRole,
  // ) {
  //   return await this.db.role.findByIdAndUpdate(
  //     roleId,
  //     {
  //       $push: {
  //         featurePermissions: {
  //           $each: assignFeaturePermissionToRole.featurePermissions,
  //         },
  //       },
  //     },
  //     { new: true },
  //   );
  // }
  // }
  // async createRole(name: string): Promise<Role> {
  //   const role = new Role();
  //   role.name = name;
  //   return await this.roleRepository.save(role);
  // }
  // async findByName(role: RoleEnum): Promise<Role | null> {
  //   return this.prisma.role.findUnique({
  //     where: {
  //       name: role,
  //     },
  //   });
  // }

  // async findAllAsMap(): Promise<Map<string, Role>> {
  //   const entities = await this.prisma.role.findMany();

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

  
  // async getProductById(id: number) {
  //   const product = await this.prismaService.product.findUnique({
  //     where: {
  //       id,
  //     },
  //   });
  //   if (!product) {
  //     throw new NotFoundException();
  //   }
  //   return product;
  // }

  // getAllProducts() {
  //   this.prismaService.product.findMany({
  //     where: {
  //       properties: {
  //         path: ['publicationYear'],
  //         lt: 2000,
  //       },
  //     },
  //   });
  // }

  // async createProduct(product: CreateProductDto) {
  //   return this.prismaService.product.create({
  //     data: product,
  //   });
  // }

  // async updateProduct(id: number, product: UpdateProductDto) {
  //   try {
  //     return await this.prismaService.product.update({
  //       data: {
  //         ...product,
  //         id: undefined,
  //         properties: product.properties ?? Prisma.DbNull,
  //       },
  //       where: {
  //         id,
  //       },
  //     });
  //   } catch (error) {
  //     if (
  //       error instanceof Prisma.PrismaClientKnownRequestError &&
  //       error.code === PrismaError.RecordDoesNotExist
  //     ) {
  //       throw new NotFoundException();
  //     }
  //     throw error;
  //   }
  // }

  // async deleteProduct(id: number) {
  //   try {
  //     return await this.prismaService.product.delete({
  //       where: {
  //         id,
  //       },
  //     });
  //   } catch (error) {
  //     if (
  //       error instanceof Prisma.PrismaClientKnownRequestError &&
  //       error.code === PrismaError.RecordDoesNotExist
  //     ) {
  //       throw new NotFoundException();
  //     }
  //     throw error;
  //   }
  // }
}
