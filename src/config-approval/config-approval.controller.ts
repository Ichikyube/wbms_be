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
import { ConfigApprovalService } from './config-approval.service';
import { CreateConfigApprovalDto } from './dto/create-config-approval.dto';
import { UpdateConfigApprovalDto } from './dto/update-config-approval.dto';
import { Request, Response } from 'express';
@Controller('config-approval')
export class ConfigApprovalController {
  constructor(private readonly configApprovalService: ConfigApprovalService) {}

  @Patch(':id/approveLvl1')
  async approveRequestLvl1(@Param('id') id: string, @Req() req: Request) {
    const userId = req.user['id'];
    return await this.configApprovalService.approveLvl1(userId, id);
  }
  @Patch(':id/approveLvl2')
  async approveRequestLvl2(@Param('id') id: string, @Req() req: Request) {
    const userId = req.user['id'];
    return await this.configApprovalService.approveLvl2(userId, id);
  }
  @Patch(':id/approveLvl3')
  async approveRequestLvl3(@Param('id') id: string, @Req() req: Request) {
    const userId = req.user['id'];
    return await this.configApprovalService.approveLvl3(userId, id);
  }
  @Patch(':id/reject')
  async rejectRequest(@Param('id') id: string) {
    return await this.configApprovalService.rejectRequest(id);
  }
}
