import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigsService {
  constructor(
    private db: DbService,
    private config: ConfigService,
  ) {}

  async getEnv() {
    const dataOut = {
      status: true,
      message: '',
      data: {},
      logs: {},
    };

    try {
      const ENV = {
        WBMS_SEMAI_BACKEND_URL: this.config.get('WBMS_SEMAI_BACKEND_URL'),
        WBMS_SEMAI_API_KEY: this.config.get('WBMS_SEMAI_API_KEY'),

        WBMS_WB_IP: this.config.get('WBMS_WB_IP'),
        WBMS_WB_PORT: this.config.get('WBMS_WB_PORT'),
        WBMS_WB_MIN_WEIGHT: this.config.get('WBMS_WB_MIN_WEIGHT'),
        WBMS_WB_STABLE_PERIOD: this.config.get('WBMS_WB_STABLE_PERIOD'),
      };

      dataOut.data = { ...dataOut.data, ENV };
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };
    }

    return dataOut;
  }

  async getAll() {
    const records = await this.db.config.findMany({
      orderBy: [
        {
          name: 'desc',
        },
      ],
    });

    return records;
  }

  async getActiveConfigsToday(): Promise<any[]> {
    const date = new Date().toLocaleString('id-ID');

    const dateParts = date.split(', ')[0].split('/'); // Split the date
    const timeParts = date.split(', ')[1].split('.'); // Split the time
    // Convert the year, month, and day strings to integers.
    const year = parseInt(dateParts[2]);
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[0]);
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);
    const seconds = parseInt(timeParts[2]);

    // Create a new Date object using the year, month, and day integers.
    const parsedDate = Date.UTC(year, month - 1, day, hours, minutes, seconds);

    const today = new Date(parsedDate);

    today.setHours(0, 0, 0, 0);
    const midnight = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    const activeConfigs = await this.db.config.findMany({
      where: {
        start: {
          gte: today,
          lte: midnight,
        },
      },
      select: {
        name: true,
        type: true,
        tempValue: true,
        defaultVal: true,
        start: true,
        end: true,
      },
    });
    return activeConfigs;
  }

  async searchMany(query: any) {
    const records = await this.db.config.findMany({
      where: {
        ...query,
      },
    });

    return records;
  }

  async searchFirst(query: any) {
    const record = await this.db.config.findFirst({
      ...query,
    });

    return record;
  }

  async getById(id: number) {
    const record = await this.db.config.findUnique({
      where: { id },
    });

    return record;
  }

  async editById(id: number, dto: any, userId: string) {
    const data = {
      lvlOfApprvl: parseInt(dto.lvlOfApprvl),
      status: dto.status,
      lifespan: dto.lifespan,
      userModified: userId,
    };
    const params = {
      where: { id },
      data,
    };

    const record = await this.db.config.update(params);

    return record;
  }

  WbTransactionUrlMapping() {
    // 4:15 harus dirubah, ini sementara, status ini tidak valid, seharusnya 4:20
    const urlMapping = {
      1: {
        1: {
          0: '/wb/pks-transaction/normal',
          15: '/wb/pks-transaction/cancel',
        },
        3: {
          10: '/wb/pks-transaction/normal',
          15: '/wb/pks-transaction/cancel',
        },
        4: {
          15: '/wb/pks-transaction/cancel',
          20: '/wb/pks-transaction/cancel',
        },
        5: { 23: '/wb/pks-transaction/reject' },
      },
      2: {
        1: { 0: '/wb/t30-transaction/normal' },
        4: { 20: '/wb/t30-transaction/cancel' },
      },
      3: {
        4: { 20: '/wb/bulking-transaction/normal' },
      },
    };

    return urlMapping;
  }

  TransactionValidation() {
    // 4:15 harus dirubah, ini sementara, status ini tidak valid, seharusnya 4:20
    const statusMapping = {
      1: {
        1: {
          0: 'pks-normal',
          15: 'pks-cancel',
        },
        3: {
          10: 'pks-normal',
          15: 'pks-cancel',
        },
        4: {
          15: 'pks-cancel',
          20: 'pks-cancel',
        },
        5: { 23: 'pks-reject' },
      },
      2: {
        1: { 0: '/wb/t30-transaction/normal' },
        4: { 20: '/wb/t30-transaction/cancel' },
      },
      3: {
        4: { 20: '/wb/bulking-transaction/normal' },
      },
    };

    return statusMapping;
  }
}
