import {
  Injectable,
  ForbiddenException,
  NotFoundException,
  BadRequestException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { hash } from 'argon2';

import { DbService } from 'src/db/db.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { UserEntity } from 'src/entities';
import { ProfileEntity } from 'src/entities/profile.entity';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class UsersService {
  constructor(private db: DbService) {}

  async getIAM(id: string): Promise<any> {
    // const decodedUserInfo = req.user as { id: string; email: string };
    const user = await this.db.user.findUnique({
      where: { id },
      include: {
        profile: true,
        userRole: {
          select: {
            name: true,
          },
        },
      },
    });
    if (!user) {
      throw new NotFoundException();
    }

    delete user.hashedPassword;
    delete user.hashedRT;

    return user;
  }

  async getAll(): Promise<any[]> {
    const records = await this.db.user.findMany({
      // select: { id: true, email: true },
      where: { isDeleted: false },
      include: {
        profile: true,
        userRole: {
          select: {
            name: true,
          },
        },
      },
      orderBy: [
        {
          dtCreated: 'desc',
        },
        {
          username: 'desc',
        },
      ],
    });
    return records;
  }

  async getAllDeleted(): Promise<any[]> {
    const records = await this.db.user.findMany({
      where: { isDeleted: true },
      include: {
        profile: true,
        userRole: {
          select: {
            name: true,
          },
        },
      },
    });

    return records;
  }

  async getById(id: string): Promise<any> {
    // find the user by username
    const user = await this.db.user.findUnique({
      where: { id },
      include: {
        profile: true,
        userRole: {
          select: {
            name: true,
          },
        },
      },
    });

    return user;
  }

  async searchFirst(query: any): Promise<any> {
    const record = await this.db.user.findFirst({
      where: {
        ...query.where,
        AND: [{ isDeleted: false }],
      },
      include: {
        profile: true,
        userRole: {
          select: {
            name: true,
          },
        },
      },
    });
    return record;
  }

  async searchMany(query: any): Promise<any[]> {
    const records = await this.db.user.findMany({
      where: {
        ...query.where,
        AND: [{ isDeleted: false }],
      },
      include: {
        profile: true,
        userRole: {
          select: {
            name: true,
          },
        },
      },
    });
    return records;
  }

  async searchFirstDeleted(query: any): Promise<any> {
    const record = await this.db.user.findFirst({
      where: {
        ...query.where,
        AND: [{ isDeleted: true }],
      },
      include: {
        profile: true,
        userRole: {
          select: {
            name: true,
          },
        },
      },
    });
    return record;
  }

  async searchManyDeleted(query: any): Promise<any[]> {
    const records = await this.db.user.findMany({
      where: {
        ...query.where,
        AND: [{ isDeleted: true }],
      },
      include: {
        profile: true,
        userRole: {
          select: {
            name: true,
          },
        },
      },
    });

    return records;
  }

  async create(
    dto: CreateUserDto,
    file: Express.Multer.File,
    userId: string,
  ): Promise<any> {
    // generate the password hash
    const { username, email, nik, isLDAPUser, roleId } = dto;
    let user = await this.db.user.findFirst({ where: { username } });
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    const hashedPassword = await hash(dto.password);
    const role = await this.db.role.findUnique({ where: { id: dto.roleId } });
    if (!role) {
      throw new HttpException('Role not found', HttpStatus.BAD_REQUEST);
    }
    // save the new user in the db
    console.log(isLDAPUser);
    user = await this.db.user
      .create({
        data: {
          username: username,
          email: email,
          nik: nik,
          profile: {
            create: {
              name: dto.name,
              profilePic: file.filename,
              division: dto.division,
              position: dto.position,
              phone: dto.phone,
              doB: dto.doB,
              alamat: dto.alamat,
            },
          },
          hashedPassword: hashedPassword,
          roleId: roleId,
          userCreated: userId,
          isLDAPUser: isLDAPUser,
        },
        include: { profile: true },
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
    file: Express.Multer.File,
    userId: string,
  ) {
    let updateData = new UserEntity();
    const profileDto = [
      'name',
      'file',
      'division',
      'position',
      'phone',
      'doB',
      'alamat',
    ];
    if (dto.password) updateData.hashedPassword = await hash(dto.password);
    delete dto.password;
    let filteredDto: any = {};
    let filteredUserDto: Partial<UserEntity> = {};
    let filteredProfileDto: Partial<ProfileEntity> = {};
    for (const prop in dto) {
      if (dto[prop]) {
        filteredDto[prop] = dto[prop];
      }
    }
    for (const prop in filteredDto) {
      if (profileDto.includes(prop)) {
        filteredProfileDto[prop] = filteredDto[prop];
      } else {
        filteredUserDto[prop] = filteredDto[prop];
      }
    }

    filteredProfileDto = {
      ...filteredProfileDto,
      userModified: userId,
      dtModified: new Date(),
    };

    if (file) {
      filteredProfileDto.profilePic = file.filename;
    }

    updateData = {
      ...updateData,
      ...filteredUserDto,
      userModified: userId,
      dtModified: new Date(),
    };
    const updatedUser = await this.db.user
      .update({
        where: { id: id },
        data: {
          ...updateData,
          profile: { update: filteredProfileDto },
        },
        include: {
          profile: true,
          userRole:{
            select:{
              name: true
            }
          }
        },
      })
      .catch((error) => {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          if (error.code === 'P2002')
            throw new ForbiddenException('Username/Email/NIK already taken.');
        }
        throw error;
      });

    return updatedUser;
  }

  async updateUserRole(userId: string, roleId: number): Promise<any> {
    try {
      return await this.db.user.update({
        where: {
          id: userId,
        },
        data: {
          roleId,
        },
        // include:{profile:true}
      });
    } catch (err) {
      if (err?.code === 'P2025') {
        throw new NotFoundException(`Record ${userId} to update not found`);
      }
    }
  }
  async updateUserProfile(
    userId: string,
    dto: UpdateProfileDto,
  ): Promise<ProfileEntity> {
    try {
      return await this.db.profile.update({
        where: {
          userId: userId,
        },
        data: {
          ...dto,
        },
      });
    } catch (err) {
      if (err?.code === 'P2025') {
        throw new NotFoundException(`Record ${userId} to update not found`);
      }
    }
  }
  async deleteById(id: string, userId: string) {
    const user = await this.db.user.update({
      where: { id },
      data: { isDisabled: true, isDeleted: true, userModified: userId },
    });

    return user;
  }
}
