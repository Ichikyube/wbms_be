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
import { Request } from 'express';
import { ConfigRequestService } from './config-request.service';
import { CreateConfigRequestDto } from './dto/create-config-request.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Configs-Request')
@ApiBearerAuth('access-token')
@Controller('config-requests')
export class ConfigRequestController {
  constructor(private readonly requestService: ConfigRequestService) {}

  @Get()
  async getAllRequests() {
    return await this.requestService.getAllRequests();
  }
  @Post('')
  async createConfigRequest(@Body() dto: CreateConfigRequestDto, @Req() req: Request) {
    const userId = req.user['sub'];
    return await this.requestService.createRequest(userId, dto);
  }

  @Patch(':id/approve')
  async approveRequest(@Param('id') id: string, @Req() req: Request) {
    const userId = req.user['sub'];
    return await this.requestService.approveRequest(userId, id);
  }

  @Patch(':id/reject')
  async rejectRequest(@Req() req: Request, @Param('id') id: string) {
    const userId = req.user['sub'];
    return await this.requestService.rejectRequest(userId, id);
  }
}
