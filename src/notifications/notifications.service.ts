import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class NotificationsService {
  constructor(private readonly db: DbService) {}

  async createNotification(message: string) {
    return this.db.notification.create({
      data: {
        message,
      },
    });
  }

  async getAllNotifications() {
    return this.db.notification.findMany({ where: { isResponded: false } });
  }

  async markNotificationAsRead(id: string) {
    return this.db.notification.update({
      where: { id },
      data: { isResponded: true },
    });
  }
}
