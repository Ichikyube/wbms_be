import { Body, Controller, Get, Post } from '@nestjs/common';
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
    return this.notificationsService.findAllNotifications();
  }
}
