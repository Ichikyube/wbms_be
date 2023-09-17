import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ConfigRequestsAdminService } from './config-requests-admin.service';

@ApiTags('Config-Requests-Admin')
@Controller('config-requests-admin')
export class ConfigRequestsAdminController {
  constructor(
    private readonly configRequestsAdminService: ConfigRequestsAdminService,
  ) {}

  @Post()
  async createAdminList(@Body('groupMap') lvlMap: object) {
    return this.configRequestsAdminService.createRequestAdminList(lvlMap);
  }
  @Get()
  async getAdminList() {
    return await this.configRequestsAdminService.getRequestAdminList();
  }
}
