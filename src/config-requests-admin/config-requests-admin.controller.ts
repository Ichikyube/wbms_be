import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConfigRequestsAdminService } from './config-requests-admin.service';

@Controller('config-requests-admin')
export class ConfigRequestsAdminController {
  constructor(private readonly configRequestsAdminService: ConfigRequestsAdminService) {}
  
  @Post()
  async createAdminList(
    @Body('groupMap') lvlMap: object,
  ) {
    return this.configRequestsAdminService.createRequestAdminList(lvlMap);
  }
  @Get()
  async getAdminList() {
    return this.configRequestsAdminService.getRequestAdminList();
  }
}
