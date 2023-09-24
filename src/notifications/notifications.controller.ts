import { Body, Controller, Get, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { NotificationsService } from './notifications.service';
import { ApiBearerAuth } from '@nestjs/swagger';
@ApiBearerAuth('access-token')
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}
  
  @Post()
  async createNotification(@Body('message') message: string) {
    return this.notificationsService.createNotification(message);
  }

  @Get()
  async findAllNotifications() {
    return this.notificationsService.getAllNotifications();
  }
  
  @Patch(':id/read')
  async markNotificationAsRead(@Param('id') id: string) {
    return this.notificationsService.markNotificationAsRead((id));
  }
}
