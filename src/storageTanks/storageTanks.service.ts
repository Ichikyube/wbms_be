import { Injectable } from '@nestjs/common';

import { DbService } from 'src/db/db.service';
import { CreateStorageTankDto, UpdateStorageTankDto } from './dto';
import { StorageTankEntity } from 'src/entities';
import { Prisma } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { SemaiService } from 'src/semai/semai.service';

@Injectable()
export class StorageTanksService {
  constructor(
    private db: DbService,
    private config: ConfigService,
    private semaiService: SemaiService,
  ) {}

  async syncWithSemai() {
    const storageTanks = await this.semaiService.storageTanks().then((res) => res.data.storageTanks);

    if (storageTanks?.length > 0)
    storageTanks.forEach(({ 
      allowableSccModel,
      capacityKg,
      code,
      createdBy,
      createdTime,
      heightMeter,
      id,
      isDeleted,
      name,
      productId,
      productName,
      shortName,
      siteId,
      siteName,
      stockOwnerId,
      stockOwnerName,
      updatedBy,
      updatedTime}) => {
        this.db.storageTank
          .findFirstOrThrow({
            where: {
              refType: 1,
              refId: id,
            },
          })
          .then((res) => {
            this.db.storageTank
              .update({
                where: { id: res.id },
                data: {
                  siteRefId: siteId,
                  siteName,
                  stockOwnerRefId: stockOwnerId,
                  stockOwnerName,
                  productRefId: productId,
                  productName,
                  code,
                  name,
                  shortName,
                  capacity: capacityKg,
                  height: heightMeter,
                  sccModel: allowableSccModel,
                  isDeleted: isDeleted === 1? true: false,
                  userCreated: createdBy,
                  userModified: updatedBy,
                  dtCreated: new Date(createdTime),
                  dtModified: new Date(updatedTime),
                },
              })
              .then((res) => console.log(res));
          })
          .catch(() => {
            this.db.storageTank
              .create({
                data: {
                  refType: 1,
                  refId: id,
                  siteRefId: siteId,
                  siteName,
                  stockOwnerRefId: stockOwnerId,
                  stockOwnerName,
                  productRefId: productId,
                  productName,
                  code,
                  name,
                  shortName,
                  description: "string",
                  capacity: capacityKg,
                  height: heightMeter,
                  sccModel: allowableSccModel,
                  isDeleted: isDeleted === 1? true: false,
                  userCreated: createdBy,
                  userModified: updatedBy,
                  dtCreated: new Date(createdTime),
                  dtModified: new Date(updatedTime),
                },
              })
              .then((res) => console.log(res));
          });
      });

    return storageTanks;
  }

  async getAll(): Promise<StorageTankEntity[]> {
    const records = await this.db.storageTank.findMany({
      where: { isDeleted: false },
    });

    return records;
  }

  async getAllDeleted(): Promise<StorageTankEntity[]> {
    const records = await this.db.storageTank.findMany({
      where: { isDeleted: true },
    });

    return records;
  }

  async getById(id: string): Promise<StorageTankEntity> {
    const record = await this.db.storageTank.findUnique({
      where: { id },
    });

    return record;
  }

  async searchFirst(query: any): Promise<StorageTankEntity> {
    query.where = { ...query.where, isDeleted: false };

    const record = await this.db.storageTank.findFirst(query);

    return record;
  }

  async searchMany(query: any): Promise<StorageTankEntity[]> {
    query.where = { ...query.where, isDeleted: false };

    const records = await this.db.storageTank.findMany(query);

    return records;
  }

  async searchFirstDeleted(query: any): Promise<StorageTankEntity> {
    query.where = { ...query.where, isDeleted: true };

    const record = await this.db.storageTank.findFirst(query);

    return record;
  }

  async searchManyDeleted(query: any): Promise<StorageTankEntity[]> {
    query.where = { ...query.where, isDeleted: true };

    const records = await this.db.storageTank.findMany(query);

    return records;
  }

  async create(
    dto: CreateStorageTankDto,
    userId: string,
  ): Promise<StorageTankEntity> {
    const params = {
      data: {
        ...dto,
        userCreated: userId,
        userModified: userId,
      },
    };

    const record = await this.db.storageTank.create(params);

    return record;
  }

  async updateById(
    id: string,
    dto: UpdateStorageTankDto,
    userId: string,
  ): Promise<StorageTankEntity> {
    const params = {
      where: { id },
      data: { ...dto, userModified: userId },
    };

    const record = await this.db.storageTank.update(params);

    return record;
  }

  async deleteById(id: string, userId: string): Promise<StorageTankEntity> {
    const params = {
      where: { id },
      data: { isDeleted: true, userModified: userId },
    };

    const record = await this.db.storageTank.update(params);

    return record;
  }
}
