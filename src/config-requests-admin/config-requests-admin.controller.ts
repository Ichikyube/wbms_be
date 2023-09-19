import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ConfigRequestsAdminService } from './config-requests-admin.service';
import { Request } from 'express';

@ApiTags('Config-Requests-Admin')
@Controller('config-requests-admin')
export class ConfigRequestsAdminController {
  constructor(
    private readonly configRequestsAdminService: ConfigRequestsAdminService,
  ) {}

  @Post()
  async createAdminList(@Body('groupMap') lvlMap: object, @Req() req: Request) {
    const userId = req.user['sub'];
    return this.configRequestsAdminService.createRequestAdminList(lvlMap, userId);
  }
  @Get()
  async getAdminList() {
    return await this.configRequestsAdminService.getRequestAdminList();
  }
}
