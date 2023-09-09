import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

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
