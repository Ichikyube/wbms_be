import { Injectable } from '@nestjs/common';

import { DbService } from 'src/db/db.service';
import { CreateMillDto, UpdateMillDto } from './dto';
import { MillEntity } from 'src/entities';
import { Prisma } from '@prisma/client';

@Injectable()
export class MillsService {
  constructor(private db: DbService) {}

  async getAll(): Promise<MillEntity[]> {
    const records = await this.db.mill.findMany({
      where: { isDeleted: false },
      orderBy: [
        {
          dtCreated: 'desc',
        },
        {
          name: 'desc',
        },
      ],
      include: {
        site: {
          select: {
            id:true,
            name: true,
            shortName:true,
            description:true,
          }
        },
        company: {
          select: {
            id:true,
            name:true,
            shortName:true,
          }
        }
      },
    });

    return records;
  }
  async getAttributes() {
    const modelFields = await Prisma.dmmf.datamodel.models.find(
      (model) => model.name === 'Mill',
    ).fields;
    const attr = await modelFields.map((modelField) => modelField.name);
    console.log(attr);
    return attr;
  }
  async getAllDeleted(): Promise<MillEntity[]> {
    const records = await this.db.mill.findMany({
      where: { isDeleted: true },
    });

    return records;
  }

  async getById(id: string): Promise<MillEntity> {
    const record = await this.db.mill.findUnique({
      where: { id },
    });

    return record;
  }

  async searchFirst(query: any): Promise<MillEntity> {
    query.where = { ...query.where, isDeleted: false };

    const record = await this.db.mill.findFirst(query);

    return record;
  }

  async searchMany(query: any): Promise<MillEntity[]> {
    query.where = { ...query.where, isDeleted: false };

    const records = await this.db.mill.findMany(query);

    return records;
  }

  async searchFirstDeleted(query: any): Promise<MillEntity> {
    query.where = { ...query.where, isDeleted: true };

    const record = await this.db.mill.findFirst(query);

    return record;
  }

  async searchManyDeleted(query: any): Promise<MillEntity[]> {
    query.where = { ...query.where, isDeleted: true };

    const records = await this.db.mill.findMany(query);

    return records;
  }

  async create(dto: CreateMillDto, userId: string): Promise<MillEntity> {
    const params = {
      data: {
        ...dto,
        userCreated: userId,
        userModified: userId,
      },
    };

    const record = await this.db.mill.create(params);

    return record;
  }

  async updateById(
    id: string,
    dto: UpdateMillDto,
    userId: string,
  ): Promise<MillEntity> {
    const params = {
      where: { id },
      data: { ...dto, userModified: userId },
    };

    const record = await this.db.mill.update(params);

    return record;
  }

  async deleteById(id: string, userId: string): Promise<MillEntity> {
    const params = {
      where: { id },
      data: { isDeleted: true, userModified: userId },
    };

    const record = await this.db.mill.update(params);

    return record;
  }
}
