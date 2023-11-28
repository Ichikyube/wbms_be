import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { UserEntity } from 'src/entities';
import { UserEvents } from './users.event';

@Injectable()
export class UserEventEmitter {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  async emitUserCreatedEvent() {
    await this.eventEmitter.emit(UserEvents.CREATED, {
      message: 'new User has been Created',
    });
  }

  async emitUserUpdatedEvent(user: UserEntity) {
    await this.eventEmitter.emit(UserEvents.UPDATED, {
      message: 'User ${user.id} data has been Updated',
      data: user,
    });
  }

  async emitUserDeletedEvent(user: UserEntity) {
    await this.eventEmitter.emit(UserEvents.DELETED, {
      message: `User ${user.username} has been Deleted`,
    });
  }
}
