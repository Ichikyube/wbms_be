import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateNotificationDto } from './dto/create-notification';

@Injectable()
export class NotificationsService {
  constructor(private readonly db: DbService) {}

  async createNotification(dto: CreateNotificationDto) {
    const { message, target, configRequestId, photo, sender } = dto;
    return this.db.notification.create({
      data: {
        message,
        target,
        configRequestId,
        photo,
        sender
      },
    });
  }

  async getAllNotifications(userId: string) {
    return this.db.notification.findMany({
      where: {
        target: {
          array_contains: userId,
        },
      },
    });
  }

  async modifyByRequestId(userId: string, id: string) {
    // Implement your logic to modify the notification by request ID here
    // For example, you might interact with a database or perform some other operation

    return {
      message: `Notification with ID ${id} modified by user ${userId}`,
    };
  }
  async modifyNotificationMessage(requestConfigId: string, newMessage: string) {
    return this.db.notification.update({
      where: { configRequestId: requestConfigId },
      data: { message: newMessage },
    });
  }

  async markNotificationAsRead(userId: string, id: string) {
    const notification = await this.db.notification.findUnique({
      where: { id },
    });

    if (!notification) {
      throw new Error(`Notification with ID ${id} not found`);
    }

    const updatedTarget = JSON.parse(
      JSON.stringify(notification.target),
    ).filter((targetId) => targetId !== userId);

    return this.db.notification.update({
      where: { id },
      data: { target: updatedTarget },
    });
  }
}
