import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateNotificationDto } from './dto/create-notification';

@Injectable()
export class NotificationsService {
  constructor(private readonly db: DbService) {}

  async createNotification(dto: CreateNotificationDto) {
    const{message, target} = dto
    return this.db.notification.create({
      data: {
        message,
        target
      },
    });
  }

  async getAllNotifications(userId: string) {
    return this.db.notification.findMany({
      where: {
        target: {
          array_contains: userId
        }
      }
    });
    
  }

  async markNotificationAsRead(userId: string, id: string) {
    const notification = await this.db.notification.findUnique({
      where: { id },
    });
  
    if (!notification) {
      throw new Error(`Notification with ID ${id} not found`);
    }
  
    const updatedTarget = JSON.parse(JSON.stringify(notification.target)).filter(targetId => targetId !== userId);
  
    return this.db.notification.update({
      where: { id },
      data: { target: updatedTarget },
    });
  }
}
