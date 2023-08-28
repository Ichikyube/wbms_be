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
    const data = {
      config: {
        connect: {
          id: dto.configId,
        },
      },
      status: RequestStatus.PENDING,
      start: dto.start,
      end: dto.end,
    };
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
        config:true
      }
    });
  }

  async approveRequest(requestId: string) {
    return this.db.configRequest.update({
      where: { id: requestId },
      data: { status: RequestStatus.APPROVED },
    });
  }

  async rejectRequest(requestId: string) {
    return this.db.configRequest.update({
      where: { id: requestId },
      data: { status: RequestStatus.REJECTED },
    });
  }
}
