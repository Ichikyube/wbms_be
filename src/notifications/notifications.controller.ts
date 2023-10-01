import { Body, Controller, Get, Param, Patch, Post, Put, Req, UseGuards } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { NotificationsService } from './notifications.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CreateNotificationDto } from './dto/create-notification';
import { Request } from 'express';
@ApiBearerAuth('access-token')
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}
  
  @Post()
  async createNotification(@Body('message') dto: CreateNotificationDto) {
    return this.notificationsService.createNotification(dto);
  }

  @Get()
  async findAllNotifications(@Req() req: Request) {
    const userId = req.user['sub'];
    return this.notificationsService.getAllNotifications(userId);
  }
  
  @Patch(':id/read')
  async markNotificationAsRead(@Param('id') id: string) {
    return this.notificationsService.markNotificationAsRead((id));
  }
}
