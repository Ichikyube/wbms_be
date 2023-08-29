import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ConfigRequestService } from './config-request.service';
import { CreateConfigRequestDto } from './dto/create-config-request.dto';
import { UpdateConfigRequestDto } from './dto/update-config-request.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Configs-Request')
@Controller('config-requests')
export class ConfigRequestController {
  constructor(private readonly requestService: ConfigRequestService) {}

  @Get()
  async getAllRequests() {
    return await this.requestService.getAllRequests();
  }
  @Post('')
  async createConfigRequest(@Body() dto: CreateConfigRequestDto) {
    console.log(dto);
    return await this.requestService.createRequest(dto);
  }

  @Patch(':id/approve')
  async approveRequest(@Param('id') id: string) {
    return await this.requestService.approveRequest(id);
  }

  @Patch(':id/reject')
  async rejectRequest(@Param('id') id: string) {
    return await this.requestService.rejectRequest(id);
  }
}
