import { Injectable } from '@nestjs/common';
import { CreateConfigRequestDto } from './dto/create-config-request.dto';
import { UpdateConfigRequestDto } from './dto/update-config-request.dto';
import { DbService } from 'src/db/db.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigRequestService {
  constructor(
    private db: DbService,
    private config: ConfigService,
  ) {}

  async getAllRequests() {
    return this.db.configRequest.findMany();
  }

  async approveRequest(requestId: string) {
    return this.db.configRequest.update({
      where: { id: requestId },
      data: { status: 'APPROVED' },
    });
  }

  async rejectRequest(requestId: string) {
    return this.db.configRequest.update({
      where: { id: requestId },
      data: { status: 'REJECTED' },
    });
  }
}
