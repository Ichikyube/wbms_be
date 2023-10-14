import { Injectable } from '@nestjs/common';

import { DbService } from 'src/db/db.service';
import { CreateTransportVehicleDto, UpdateTransportVehicleDto } from './dto';
import { TransportVehicleEntity } from 'src/entities';
import { Prisma } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { SemaiService } from 'src/semai/semai.service';

@Injectable()
export class TransportVehicleService {
  constructor(
    private db: DbService,
    private config: ConfigService,
    private semaiService: SemaiService,
  ) {}

  async syncWithSemai() {
    const transportVehicles = await this.semaiService
      .transportVehicles()
      .then((res) => res.data.transportVehicles);

    if (transportVehicles?.length > 0)
      transportVehicles.forEach(
        ({
          allowableSccModel,
          brand,
          capacityKg,
          code,
          companyId,
          companyName,
          createdBy,
          createdTime,
          description,
          id,
          isDeleted,
          keurExpiryDate,
          licenseExpiryDate,
          model,
          plateNo,
          productId,
          productName,
          updatedBy,
          updatedTime,
        }) => {
          this.db.transportVehicle
            .findFirstOrThrow({
              where: {
                refType: 1,
                refId: id,
              },
            })
            .then((res) => {
              this.db.transportVehicle
                .update({
                  where: { id: res.id },
                  data: {
                    companyRefId: companyId,
                    companyName: companyName,

                    code,
                    productRefId: productId,
                    productName,
                    plateNo,
                    capacity: capacityKg,
                    brand,
                    model,
                    sccModel: allowableSccModel,
                    notes: description,
                    licenseED: licenseExpiryDate,
                    keurED: keurExpiryDate,
                    isDeleted,
                    userCreated: createdBy,
                    userModified: updatedBy,
                    dtCreated: createdTime,
                    dtModified: updatedTime,
                  },
                })
                .then((res) => console.log(res));
            })
            .catch(() => {
              this.db.transportVehicle
                .create({
                  data: {
                    companyRefId: companyId,
                    companyName: companyName,

                    code,
                    productRefId: productId,
                    productName,
                    plateNo,
                    capacity: capacityKg,
                    brand,
                    model,
                    sccModel: allowableSccModel,
                    notes: description,
                    licenseED: licenseExpiryDate,
                    keurED: keurExpiryDate,
                    isDeleted,
                    userCreated: createdBy,
                    userModified: updatedBy,
                    dtCreated: createdTime,
                    dtModified: updatedTime,
                  },
                })
                .then((res) => console.log(res));
            });
        },
      );

    return transportVehicles;
  }

  async getAll(): Promise<TransportVehicleEntity[]> {
    const records = await this.db.transportVehicle.findMany({
      where: { isDeleted: false },
      orderBy: [
        {
          dtCreated: 'desc',
        },
      ],
    });

    return records;
  }

  async getAllDeleted(): Promise<TransportVehicleEntity[]> {
    const records = await this.db.transportVehicle.findMany({
      where: { isDeleted: true },
    });

    return records;
  }

  async getById(id: string): Promise<TransportVehicleEntity> {
    const record = await this.db.transportVehicle.findUnique({
      where: { id },
    });

    return record;
  }

  async searchFirst(query: any): Promise<TransportVehicleEntity> {
    query.where = { ...query.where, isDeleted: false };

    const record = await this.db.transportVehicle.findFirst(query);

    return record;
  }

  async searchMany(query: any): Promise<TransportVehicleEntity[]> {
    query.where = { ...query.where, isDeleted: false };

    const records = await this.db.transportVehicle.findMany(query);

    return records;
  }

  async searchFirstDeleted(query: any): Promise<TransportVehicleEntity> {
    query.where = { ...query.where, isDeleted: true };

    const record = await this.db.transportVehicle.findFirst(query);

    return record;
  }

  async searchManyDeleted(query: any): Promise<TransportVehicleEntity[]> {
    query.where = { ...query.where, isDeleted: true };

    const records = await this.db.transportVehicle.findMany(query);

    return records;
  }

  async create(
    dto: CreateTransportVehicleDto,
    userId: string,
  ): Promise<TransportVehicleEntity> {
    const params = {
      data: {
        ...dto,
        userCreated: userId,
        userModified: userId,
      },
    };

    const record = await this.db.transportVehicle.create(params);

    return record;
  }

  async updateById(
    id: string,
    dto: UpdateTransportVehicleDto,
    userId: string,
  ): Promise<TransportVehicleEntity> {
    const params = {
      where: { id },
      data: { ...dto, userModified: userId },
    };

    const record = await this.db.transportVehicle.update(params);

    return record;
  }

  async deleteById(
    id: string,
    userId: string,
  ): Promise<TransportVehicleEntity> {
    const params = {
      where: { id },
      data: { isDeleted: true, userModified: userId },
    };

    const record = await this.db.transportVehicle.update(params);

    return record;
  }
}
