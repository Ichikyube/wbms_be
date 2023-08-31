import { Injectable } from '@nestjs/common';
import { CreateConfigRequestDto } from './dto/create-config-request.dto';
import { UpdateConfigRequestDto } from './dto/update-config-request.dto';
import { DbService } from 'src/db/db.service';
import { ConfigService } from '@nestjs/config';
import { RequestStatus } from '@prisma/client';

@Injectable()
export class ConfigRequestService {
  constructor(
    private db: DbService,
    private config: ConfigService,
  ) {}
  async createRequest(dto: CreateConfigRequestDto) {
    const config = await this.db.config.findFirst({
      where: { id: dto.configId },
    });
    const otherData = {
      config: {
        connect: {
          id: config.id,
        },
      },
      status: RequestStatus.PENDING,
      start: dto.start,
      end: dto.end,
    };
    const approval = {
      lvl1Signed: '',
    };
    const data =
      config.lvlOfApprvl > 1
        ? {
            ...otherData,
            approval: { create: approval },
          }
        : otherData;

    return this.db.configRequest.create({ data });
  }

  async getAllRequests() {
    return this.db.configRequest.findMany({
      where: { status: 'PENDING' },
      orderBy: [
        {
          dtCreated: 'desc',
        },
      ],
      include: {
        config: true,
      },
    });
  }
}
