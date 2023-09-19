import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigRequestsAdminService {
  constructor(
    private db: DbService,
    private config: ConfigService,
  ) {}
  async createRequestAdminList(lvlMap: object, userId: string) {
    const dataOut = {
      status: true,
      message: '',
      page: 0,
      totalRecords: 0,
      record: {},
      logs: {},
    };

    try {
      const params = {
        data: {
          lvlMap,
          dtCreated: userId,
        },
      };

      const record = await this.db.configAdminList.create(params);

      dataOut.record = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };
    }

    return dataOut;
  }
  async getRequestAdminList() {
    return await this.db.configAdminList.findFirst({
      orderBy: {
        dtCreated: 'desc', // Assuming 'createdAt' is the timestamp field indicating creation
      },
      select: {
        lvlMap: true,
      },
    });
  }
}
