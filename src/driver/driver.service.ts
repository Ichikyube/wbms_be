import { Injectable } from '@nestjs/common';

import { DbService } from 'src/db/db.service';
import { CreateDriverDto, UpdateDriverDto } from './dto';
import { DriverEntity } from 'src/entities';
import { Prisma, PrismaClient, Driver } from '@prisma/client';
import { SemaiService } from 'src/semai/semai.service';

@Injectable()
export class DriverService {
  constructor(
    private db: DbService,
    private semaiService: SemaiService,
  ) {}

  async getAll(): Promise<DriverEntity[]> {
    const records = await this.db.driver.findMany({
      where: { isDeleted: false },
      orderBy: [
        {
          dtCreated: 'desc',
        },
        {
          name: 'desc',
        },
      ],
    });

    return records;
  }

  async getAllDeleted(): Promise<DriverEntity[]> {
    const records = await this.db.driver.findMany({
      where: { isDeleted: true },
    });

    return records;
  }

  async getById(id: string): Promise<DriverEntity> {
    const record = await this.db.driver.findUnique({
      where: { id },
    });

    return record;
  }

  async searchFirst(query: any): Promise<DriverEntity> {
    query.where = { ...query.where, isDeleted: false };

    const record = await this.db.driver.findFirst(query);

    return record;
  }

  async searchMany(query: any): Promise<DriverEntity[]> {
    query.where = { ...query.where, isDeleted: false };

    const records = await this.db.driver.findMany(query);

    return records;
  }

  async searchFirstDeleted(query: any): Promise<DriverEntity> {
    query.where = { ...query.where, isDeleted: true };

    const record = await this.db.driver.findFirst(query);

    return record;
  }

  async searchManyDeleted(query: any): Promise<DriverEntity[]> {
    query.where = { ...query.where, isDeleted: true };

    const records = await this.db.driver.findMany(query);

    return records;
  }

  async create(dto: CreateDriverDto, userId: string): Promise<DriverEntity> {
    const params = {
      data: {
        ...dto,
        userCreated: userId,
        userModified: userId,
      },
    };

    const record = await this.db.driver.create(params);

    return record;
  }

  async updateById(
    id: string,
    dto: UpdateDriverDto,
    userId: string,
  ): Promise<DriverEntity> {
    const params = {
      where: { id },
      data: { ...dto, userModified: userId },
    };

    const record = await this.db.driver.update(params);

    return record;
  }

  async deleteById(id: string, userId: string): Promise<DriverEntity> {
    const params = {
      where: { id },
      data: { isDeleted: true, userModified: userId },
    };

    const record = await this.db.driver.update(params);

    return record;
  }

  async syncWithSemai() {
    const drivers = await this.semaiService
      .vehicleOperators()
      .then((res) => res.data.vehicleOperators);

    if (drivers?.length > 0)
      drivers.forEach(
        ({
          id,
          companyId,
          name,
          employeeNo,
          citizenNo,
          drivingLicenseNo,
          drivingLicenseExpiryDate,
          phone,
          email,
          address,
          companyName,
          createdTime,
          createdBy,
          updatedTime,
          updatedBy,
          deletedTime,
          deletedBy,
          isDeleted,
        }) => {
          this.db.driver
            .findFirstOrThrow({
              where: {
                refType: 1,
                refId: id,
              },
            })
            .then((res) => {
              this.db.driver
                .update({
                  where: { id: res.id },
                  data: {
                    companyRefId: companyId,
                    companyName,
                    nik: employeeNo,
                    name,
                    address,
                    email,
                    phone,
                    licenseNo: drivingLicenseNo,
                    licenseED: drivingLicenseExpiryDate,
                    isDeleted,
                    userCreated: createdBy,
                    userModified: isDeleted ? deletedBy : updatedBy,
                    dtCreated: createdTime,
                    dtModified: isDeleted ? deletedTime : updatedTime,
                  },
                })
                .then((res) => console.log(res));
            })
            .catch(() => {
              this.db.driver
                .create({
                  data: {
                    refType: 1,
                    refId: id,
                    code: citizenNo,
                    companyRefId: companyId,
                    companyName,
                    nik: employeeNo,
                    name,
                    address,
                    email,
                    phone,
                    licenseNo: drivingLicenseNo,
                    licenseED: drivingLicenseExpiryDate,
                    isDeleted,
                    userCreated: createdBy,
                    userModified: isDeleted ? deletedBy : updatedBy,
                    dtCreated: createdTime,
                    dtModified: isDeleted ? deletedTime : updatedTime,
                  },
                })
                .then((res) => console.log(res));
            });
        },
      );

    return drivers;
  }
}
