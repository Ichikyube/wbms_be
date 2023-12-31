import { Body, Controller, Get, Param, Patch, Post, Put, Req, UseGuards } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { NotificationsService } from './notifications.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateNotificationDto } from './dto/create-notification';
import { Request } from 'express';
@ApiBearerAuth('access-token')
@ApiTags('Notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}
  
  @Post()
  async createNotification(@Body() dto: CreateNotificationDto) {
    return this.notificationsService.createNotification(dto);
  }

  @Get()
  async findAllNotifications(@Req() req: Request) {
    const userId = req.user['sub'];
    return this.notificationsService.getAllNotifications(userId);
  }
  
  @Patch(':id/read')
  async markNotificationAsRead(@Req() req: Request, @Param('id') id: string) {
    const userId = req.user['sub'];
    return this.notificationsService.markNotificationAsRead(userId, id);
  }

  @Patch(':requestConfigId/forwarded')
  async modifyByRequestId(@Req() req: Request, @Param('requestConfigId') requestConfigId: string, @Body() body) {
    const userId = req.user['sub'];
    return this.notificationsService.modifyByRequestId(requestConfigId, body);
  }
}
