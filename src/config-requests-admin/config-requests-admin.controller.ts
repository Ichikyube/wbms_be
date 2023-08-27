import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConfigRequestsAdminService } from './config-requests-admin.service';

@Controller('config-requests-admin')
export class ConfigRequestsAdminController {
  constructor(private readonly configRequestsAdminService: ConfigRequestsAdminService) {}
  
  @Post()
  async createAdminList(
    @Body('groupMapping') lvlMap: object,
  ) {
    return this.configRequestsAdminService.createRequestAdminList(lvlMap);
  }

}
