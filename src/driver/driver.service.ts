import { Injectable } from '@nestjs/common';

import { DbService } from 'src/db/db.service';
import { CreateDriverDto, UpdateDriverDto } from './dto';
import { DriverEntity } from 'src/entities';

@Injectable()
export class DriverService {
  constructor(private db: DbService) {}

  async getAll(): Promise<DriverEntity[]> {
    const records = await this.db.driver.findMany({
      where: { isDeleted: false }
    });

    return records;
  }

  async getAllDeleted(): Promise<DriverEntity[]> {
    const records = await this.db.driver.findMany({
      where: { isDeleted: true }
    });

    return records;
  }

  async getById(id: string): Promise<DriverEntity> {
    const record = await this.db.driver.findUnique({
      where: { id }
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
        userModified: userId
      }
    };

    const record = await this.db.driver.create(params);

    return record;
  }

  async updateById(id: string, dto: UpdateDriverDto, userId: string): Promise<DriverEntity> {
    const params = {
      where: { id },
      data: { ...dto, userModified: userId }
    };

    const record = await this.db.driver.update(params);

    return record;
  }

  async deleteById(id: string, userId: string): Promise<DriverEntity> {
    const params = {
      where: { id },
      data: { isDeleted: true, userModified: userId }
    };

    const record = await this.db.driver.update(params);

    return record;
  }
}
