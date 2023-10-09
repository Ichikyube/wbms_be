import { Injectable } from '@nestjs/common';

import { DbService } from 'src/db/db.service';
import { CreateDriverDto, UpdateDriverDto } from './dto';
import { DriverEntity } from 'src/entities';
import { Prisma, PrismaClient, Driver } from '@prisma/client';
import { SemaiService } from 'src/semai/semai.service';

@Injectable()
export class DriverService {
  constructor(private db: DbService, private semaiService: SemaiService) {}

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


  async getAttributes() {
    const modelFields = await Prisma.dmmf.datamodel.models.find(
      (model) => model.name === 'Driver',
    ).fields;
    const attr = await modelFields.map((modelField) => modelField.name);
    console.log(attr);
    return attr;
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
    const products = await this.semaiService.products().then((res) => res.data.products);

    if (products?.length > 0)
      products.forEach((site) => {
        this.db.site
          .findFirstOrThrow({
            where: {
              refType: 1,
              refId: site.id,
            },
          })
          .then((res) => {
            this.db.site
              .update({
                where: { id: res.id },
                data: {
                  sourceSiteRefId: site?.sourceSiteId,
                  sourceSiteName: site?.sourceSiteName,

                  companyRefId: site?.companyId,
                  companyName: site?.companyName,

                  codeSap: site?.code,
                  name: site?.name,
                  shortName: site?.shortName,
                  description: site?.description,

                  latitude: site?.latitude,
                  longitude: site?.longitude,
                  solarCalibration: site?.solarCalibration,

                  isMill: site?.isMill,

                  isDeleted: !!site?.isDeleted,
                },
              })
              .then((res) => console.log(res));
          })
          .catch(() => {
            this.db.site
              .create({
                data: {
                  refType: 1,
                  refId: site.id,

                  sourceSiteRefId: site?.sourceSiteId,
                  sourceSiteName: site?.sourceSiteName,

                  companyRefId: site?.companyId,
                  companyName: site?.companyName,

                  codeSap: site?.code,
                  name: site?.name,
                  shortName: site?.shortName,
                  description: site?.description,

                  latitude: site?.latitude,
                  longitude: site?.longitude,
                  solarCalibration: site?.solarCalibration,

                  isMill: site?.isMill,

                  isDeleted: !!site?.isDeleted,

                  userCreated: "",
                  userModified: "",
                },
              })
              .then((res) => console.log(res));
          });
      });

    return products;
  }
}
