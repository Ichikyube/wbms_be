import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { DbService } from 'src/db/db.service';
import { CreateTemporaryDataDto } from './dto/create-temporaryData.dto';
import { TemporaryData } from '@prisma/client';
import { Cron } from '@nestjs/schedule';
@Injectable()
export class TemporaryDataService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private db: DbService,
  ) {}

  async insertAdminRequestData(dto: CreateTemporaryDataDto) {
    const lastId = await this.db.temporaryData.findFirst({
      orderBy: { id: 'desc' },
      select: { id: true },
    });
    let suffixId = parseInt(lastId.id.split('-')[1]);
    let id = `adm${suffixId}`;
    // Get today's date
    const today = new Date();
    // Add three days to today's date
    const threeDaysFromToday = new Date(today.setDate(today.getDate() + 3));
    // Convert the date three days from today to a string
    // const threeDaysFromTodayString = threeDaysFromToday.toLocaleDateString();
    const expDate = new Date(today.setDate(today.getDate() + 3));
    console.log(dto.data);
    const data = {
      data: dto.data,
      id,
      signed: [],
      expirationDate: expDate,
    };
    return this.db.temporaryData.create({ data });
  }

  async insertTransactionData(dto: CreateTemporaryDataDto) {
    const lastId = await this.db.temporaryData.findFirst({
      orderBy: { id: 'desc' },
      select: { id: true },
    });
    let suffixId = lastId ? parseInt(lastId.id.split('-')[1]) + 1 : 1;
    let id = `trx-${suffixId}`;
    // Get today's date
    const today = new Date();
    // Add three days to today's date
    // Convert the date three days from today to a string
    // const threeDaysFromTodayString = threeDaysFromToday.toLocaleDateString();
    const expDate = new Date(today.setDate(today.getDate() + 3));
    const data = {
      data: dto.data,
      id,
      signed: [],
      expirationDate: expDate,
    };
    return this.db.temporaryData.create({ data });
  }

  async insertManyTemporaryData(data: any[]): Promise<void> {
    const today = new Date();
    const expDate = new Date(today.setDate(today.getDate() + 3));
    const lastId =  await this.db.temporaryData.findFirst({
      orderBy: { id: 'desc' },
      select: { id: true },
    });
    let startId = lastId ? parseInt(lastId.id.split('-')[1]) + 1 : 1;
    const recordsToCreate = data.map( (item) => {
      let id = `trx-${startId++}`;

      return {
        data:{...item},
        id,
        expirationDate: expDate,
        signed: [], // Assuming 'signed' is an array field in your model
      };
    });

    await this.db.temporaryData.createMany({
      data: recordsToCreate,
      skipDuplicates: true,
    });
  }

  async approveTemporaryData(id: string) {
    // Get the temporary data from the cache.
    const existingData = await this.db.temporaryData.findUnique({
      where: { id },
    });

    // If the temporary data exists, save it to the permanent database and delete it from the cache.
    if (existingData) {
      const tempData = JSON.parse(JSON.stringify(existingData?.data));
      const {
        afdeling,
        blok,
        bonTripNo,
        deliveryOrderNo,
        driverName,
        originWeighInKg,
        originWeighInTimestamp,
        originWeighOutKg,
        originWeighOutTimestamp,
        productId,
        productName,
        progressStatus,
        qtyTbs,
        sptbs,
        transportVehiclePlateNo,
        transportVehicleSccModel,
        transporterCompanyName,
        transporterId,
        typeSite,
        typeTransaction,
      } = tempData;
      const data = {
        afdeling,
        blok,
        bonTripNo: bonTripNo.slice(0, 15),
        deliveryOrderNo,
        driverName,
        originWeighInKg: parseInt(originWeighInKg),
        originWeighInTimestamp: new Date(originWeighInTimestamp),
        originWeighOutKg: parseInt(originWeighOutKg),
        originWeighOutTimestamp: new Date(originWeighOutTimestamp),
        productId,
        productName,
        progressStatus,
        qtyTbs: parseInt(qtyTbs),
        sptbs,
        transportVehiclePlateNo,
        transportVehicleSccModel: parseInt(transportVehicleSccModel),
        transporterCompanyName,
        transporterId,
        typeSite: parseInt(typeSite),
        typeTransaction: parseInt(typeTransaction),
      };
      const dataOut = {
        status: true,
        message: '',
        data: {
          transaction: {
            record: null,
            page: 0,
          },
        },
        logs: {},
      };
      try {
        const record = await this.db.transaction.create({ data });
        await this.deleteDataById(id);
        dataOut.data.transaction.record = record;
      } catch (error) {
        dataOut.status = false;
        dataOut.message = error.message;
        dataOut.logs = { ...dataOut.logs, error };
      }
      return dataOut;
    }
  }

  async deleteAllTransactionsData() {
    await this.db.temporaryData.deleteMany({
      where: {
        id: {
          contains: 'trx',
        },
      },
    });
  }

  async deleteDataById(id) {
    await this.db.temporaryData.deleteMany({
      where: {
        id,
      },
    });
  }
  async deleteAllAdminRequestData(id) {
    await this.db.temporaryData.deleteMany({
      where: {
        id: {
          contains: 'adm',
        },
      },
    });
  }
  async deleteAdminRequestData(id) {
    await this.db.temporaryData.deleteMany({
      where: {
        id,
      },
    });
  }

  async getAllTransactions(): Promise<{ [key: string]: any }> {
    const transactions = await this.db.temporaryData.findMany({
      where: {
        id: {
          contains: 'trx',
        },
      },
    });

    return transactions;
  }

  async getAllAdminRequest(): Promise<{ [key: string]: any }> {
    const keys = await this.cacheManager.store.keys();
    const values = await Promise.all(
      keys.map((key) => this.cacheManager.store.get(key)),
    );
    const data = {};

    keys.forEach((key, index) => {
      data[key] = values[index];
    });

    return data;
  }

  async findExpired(): Promise<TemporaryData[]> {
    const now = new Date();
    return this.db.temporaryData.findMany({
      where: {
        expirationDate: {
          lt: now,
        },
      },
    });
  }

  @Cron('30 15 * * *')
  async removeExpired(): Promise<void> {
    const expiredData = await this.findExpired();
    const deletePromises = expiredData.map((item) =>
      this.db.temporaryData.delete({
        where: { id: item.id },
      }),
    );
    await Promise.all(deletePromises);
    console.log('Temporary data yang melebihi batas waktu telah dihapus.');
  }

  async removeAll(): Promise<void> {
    await this.db.temporaryData.deleteMany({});
  }
}
