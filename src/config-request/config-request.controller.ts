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
@Controller('config-request')
export class ConfigRequestController {
  constructor(private readonly requestService: ConfigRequestService) {}

  @Get()
  async getAllRequests() {
    return this.requestService.getAllRequests();
  }

  @Patch(':id/approve')
  async approveRequest(@Param('id') id: string) {
    return this.requestService.approveRequest(id);
  }

  @Patch(':id/reject')
  async rejectRequest(@Param('id') id: string) {
    return this.requestService.rejectRequest(id);
  }
}
