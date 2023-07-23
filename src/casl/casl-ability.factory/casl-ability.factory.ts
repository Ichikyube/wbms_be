import { User, City } from '@prisma/client';
import { Injectable } from "@nestjs/common";
import { AbilityBuilder, AbilityClass, ExtractSubjectType, InferSubjects, PureAbility } from '@casl/ability';
import { Action } from '../Action';
import { PrismaQuery, Subjects, createPrismaAbility } from '@casl/prisma';
import { UserRole } from 'src/auth/types/user.type';
import { SubjectsList } from '../generated/subjectsList';

// type Subjects = InferSubjects<typeof City | typeof User> | 'all';
// export type Action = 'manage' | 'create' | 'read' | 'update' | 'delete';

export type AppAbility = PureAbility<
  [Action, Subjects<SubjectsList> | 'all'],
  PrismaQuery
>;
@Injectable()
export class CaslAbilityFactory {
    createForUser(user: User) {
        const { can, cannot, build } = new AbilityBuilder<AppAbility>
        (createPrismaAbility);
      
        if (user.role === UserRole.ADMIN) {
          can(Action.Manage, 'all'); // read-write access to everything
        } else {
          can(Action.Read, 'all'); // read-only access to everything
        }

        // if (user?.role.includes(UserRole.ADMIN)) {
        //   can(Action.Manage, 'all'); // read-write access to everything
        // }
    
        // if (user?.roles.includes(Roles.Member)) {
        //   can(Action.Create, Article);
        //   can(Action.Update, Article, { author: user._id });
        //   can(Action.Delete, Article, { author: user._id, isPublished: false });
        //   can(Action.Read, Article, { author: user._id, isPublished: false });
    
        //   can(Action.Read, User, {
        //     email: user.email,
        //   });
        // }
    
        // can(Action.Read, Article, {
        //   isPublished: true,
        //   status: Status.Approved,
        // });
    
        // if (!user) {
        //   cannot(Action.Read, Article, {
        //     isPublished: false,
        //     status: Status.Rejected,
        //   });
    
        //   cannot(Action.Read, Article, {
        //     isPublished: false,
        //     status: Status.Pending,
        //   });
        // }
        // can(Action.Update, City, { authorId: user.id });
        // cannot(Action.Delete, City, { isPublished: true });

        return build();
    }
}
