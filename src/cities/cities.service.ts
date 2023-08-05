import { Injectable } from '@nestjs/common';

import { DbService } from 'src/db/db.service';
import { CreateCityDto, UpdateCityDto } from './dto';
import { CityEntity } from 'src/entities';
import { Prisma } from '@prisma/client';

@Injectable()
export class CitiesService {
  constructor(private db: DbService) {}

  async create(dto: CreateCityDto, userId: string): Promise<CityEntity> {
    const params = {
      data: {
        name: dto.name,
        province: { connect: { id: dto.provinceId } },
        userCreated: userId,
        userModified: '',
      },
    };
    console.log(params);
    const record = await this.db.city.create(params);
    console.log(record);
    return record;
  }

  async getAttributes() {
    const modelFields = await Prisma.dmmf.datamodel.models.find(
      (model) => model.name === 'City',
    ).fields;
    const attr = await modelFields.map((modelField) => modelField.name);
    console.log(attr);
    return attr;
  }

  async getAll(): Promise<CityEntity[]> {
    const records = await this.db.city.findMany({
      where: { isDeleted: false },
      include: {
        province: true,
      },
    });

    return records;
  }

  async getAllDeleted(): Promise<CityEntity[]> {
    const records = await this.db.city.findMany({
      where: { isDeleted: true },
    });

    return records;
  }

  async getById(id: string): Promise<CityEntity> {
    const record = await this.db.city.findUnique({
      where: { id },
    });

    return record;
  }

  async searchFirst(query: any): Promise<CityEntity> {
    query.where = { ...query.where, isDeleted: false };

    const record = await this.db.city.findFirst(query);

    return record;
  }

  async searchMany(query: any): Promise<CityEntity[]> {
    query.where = { ...query.where, isDeleted: false };

    const records = await this.db.city.findMany(query);

    return records;
  }

  async searchFirstDeleted(query: any): Promise<CityEntity> {
    query.where = { ...query.where, isDeleted: true };

    const record = await this.db.city.findFirst(query);

    return record;
  }

  async searchManyDeleted(query: any): Promise<CityEntity[]> {
    query.where = { ...query.where, isDeleted: true };

    const records = await this.db.city.findMany(query);

    return records;
  }

  async updateById(
    id: string,
    dto: UpdateCityDto,
    userId: string,
  ): Promise<any> {
    const params = {
      where: { id },
      data: { ...dto, userModified: userId },
    };

    const record = await this.db.city.update(params);

    return record;
  }

  async deleteById(id: string, userId: string): Promise<CityEntity> {
    const params = {
      where: { id },
      data: { isDeleted: true, userModified: userId },
    };

    const record = await this.db.city.update(params);

    return record;
  }
}
