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
        isResponded: false,
        target: {
          array_contains: userId
        }
      }
    });
    
  }

  async markNotificationAsRead(id: string) {
    return this.db.notification.update({
      where: { id },
      data: { isResponded: true },
    });
  }
}
