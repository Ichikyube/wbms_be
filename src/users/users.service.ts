import {
  Injectable,
  ForbiddenException,
  NotFoundException,
  BadRequestException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { hash } from 'argon2';

import { DbService } from 'src/db/db.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { UserEntity } from 'src/entities';

@Injectable()
export class UsersService {
  constructor(private db: DbService) {}

  async getIAM(id: string): Promise<UserEntity> {
    // const decodedUserInfo = req.user as { id: string; email: string };
    const user = await this.db.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException();
    }

    // if (user.id !== decodedUserInfo.id) {
    //   throw new ForbiddenException();
    // }
    delete user.hashedPassword;
    delete user.hashedRT;

    return user;
  }

  async getAll(): Promise<UserEntity[]> {
    const records = await this.db.user.findMany({
      // select: { id: true, email: true },
      where: { isDeleted: false },
    });

    return records;
  }

  async getAllDeleted(): Promise<UserEntity[]> {
    const records = await this.db.user.findMany({
      where: { isDeleted: true },
    });

    return records;
  }

  async getById(id: string): Promise<UserEntity> {
    // find the user by username
    const user = await this.db.user.findUnique({ where: { id } });

    return user;
  }

  async searchFirst(query: any): Promise<UserEntity> {
    query.where = { ...query.where, isDeleted: false };

    const record = await this.db.user.findFirst(query);

    return record;
  }

  async searchMany(query: any): Promise<UserEntity[]> {
    query.where = { ...query.where, isDeleted: false };

    const records = await this.db.user.findMany(query);

    return records;
  }

  async searchFirstDeleted(query: any): Promise<UserEntity> {
    query.where = { ...query.where, isDeleted: true };

    const record = await this.db.user.findFirst(query);

    return record;
  }

  async searchManyDeleted(query: any): Promise<UserEntity[]> {
    query.where = { ...query.where, isDeleted: true };

    const records = await this.db.user.findMany(query);

    return records;
  }

  async create(
    dto: CreateUserDto,
    file: Express.Multer.File,
    userId: string,
  ): Promise<UserEntity> {
    // generate the password hash
    const { username } = dto;
    let user = await this.db.user.findFirst({ where: { username } });
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    const hashedPassword = await hash(dto.password);

    // save the new user in the db
    user = await this.db.user
      .create({
        data: {
          username: dto.username,
          email: dto.email,
          nik: dto.nik,
          name: dto.name,
          profilePic: file.filename,
          division: dto.division,
          position: dto.position,
          phone: dto.phone,
          hashedPassword: hashedPassword,
          roleId: dto.roleId,
          role: dto.role,
          userCreated: userId,
          userModified: userId,
        },
      })
      .catch((error) => {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          // if (error.code === 'P2002') throw new ForbiddenException('Credentials taken.');
          if (error.code === 'P2002')
            throw new ForbiddenException('Username/Email/NIK already taken.');
        }

        throw error;
      });

    return user;
  }

  async updateById(
    id: string,
    dto: UpdateUserDto,
    userId: string,
  ): Promise<UserEntity> {
    let updateData = new UserEntity();

    if (dto.password) updateData.hashedPassword = await hash(dto.password);

    delete dto.password;

    updateData = { ...updateData, ...dto, userModified: userId };

    const user = await this.db.user
      .update({
        where: { id },
        data: { ...updateData },
      })
      .catch((error) => {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          if (error.code === 'P2002')
            throw new ForbiddenException('Username/Email/NIK already taken.');
        }

        throw error;
      });

    return user;
  }

  async deleteById(id: string, userId: string) {
    const user = await this.db.user.update({
      where: { id },
      data: { isDisabled: true, isDeleted: true, userModified: userId },
    });

    return user;
  }

  // async updateUserRole(userId: string, userRole: UserRole): Promise<User> {
  //   try {
  //     return await this.db.user.update({
  //       where: {
  //         id: userId,
  //       },
  //       data: {
  //         role: userRole,
  //       },
  //     });
  //   } catch (err) {
  //     if (err?.code === "P2025") {
  //       throw new NotFoundException(`Record ${userId} to update not found`);
  //     }
  //   }
  // }
}
