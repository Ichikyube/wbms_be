import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { UserEntity } from 'src/entities';
import { UserEventEmitter } from 'src/users/users-event-emitter';
import { UserEvents } from 'src/users/users.event';

@Injectable()
export class BroadcastService {
  @OnEvent(UserEvents.CREATED)
  async onUserCreated(user: UserEntity) {
    // Send a welcome email to the new user
  }

  @OnEvent(UserEvents.UPDATED)
  async onUserUpdated(user: UserEntity) {
    // Update the user's profile on the website
  }

  @OnEvent(UserEvents.DELETED)
  async onUserDeleted(user: UserEntity) {
    // Delete the user's profile from the website
  }
}
