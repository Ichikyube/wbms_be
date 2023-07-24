import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { hash } from 'argon2';

import { DbService } from 'src/db/db.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { UserEntity } from './entities';
import path from 'path';
import fs from 'fs';
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

  async create(dto: any, file: string, userId: string): Promise<UserEntity> {
    // generate the password hash
    const hashedPassword = await hash(dto.password);
    const profilePicturePath = await this.saveProfilePicture(file);

    const data = {
      username: dto.username,
      email: dto.email,
      nik: dto.nik,
      name: dto.name,
      profilePic: profilePicturePath,
      fileLocation: dto.fileLocation,
      address: dto.address,
      birthDate: dto.birthDate,
      division: dto.division,
      position: dto.position,
      phone: dto.phone,
      hashedPassword: hashedPassword,
      role: dto.role,
      roleModel: dto.roleModel,
      userCreated: userId,
      userModified: userId,
    };
    // save the new user in the db
    const user = await this.db.user
      .create({
        data,
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

  private async saveProfilePicture(file: MulterFile): Promise<string> {
    const fileExt = path.extname(file.originalname);
    const randomName = new Date().getTime().toString();
    const newFileName = `${randomName}${fileExt}`;

    // Define the directory where the profile pictures will be stored
    const uploadDirectory = path.join(__dirname, '../../uploads/profilePictures');

    if (!fs.existsSync(uploadDirectory)) {
      fs.mkdirSync(uploadDirectory, { recursive: true });
    }

    const filePath = path.join(uploadDirectory, newFileName);

    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, file.buffer, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(filePath);
        }
      });
    });
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
