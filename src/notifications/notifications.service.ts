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

  async findAllNotifications() {
    return this.db.notification.findMany();
  }

  async setAsReaded(id: string) {
    return this.db.notification.update({
      where: { id },
      data: { isReaded: true },
    });
  }
}
