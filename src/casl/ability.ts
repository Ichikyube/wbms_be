// src/ability.ts
import { AbilityBuilder, Ability, InferSubjects } from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { SubjectsList } from './generated/subjectsList';
import { BaseRole, User } from '@prisma/client';

export type Subjects = InferSubjects<SubjectsList> | 'all';

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: User) {
    const { can, cannot, build } = new AbilityBuilder(Ability);

    if (user.role === BaseRole.Administrator) {
      // Admin has all permissions for all resources
      can('manage', 'all');
    } else {
      // Define rules for other roles or specific permissions
      can('read', 'Post');
      can('create', 'Post', { authorId: user.id });
      can('update', 'Post', { authorId: user.id });
      can('delete', 'Post', { authorId: user.id });
    }

    return build();
  }
}
