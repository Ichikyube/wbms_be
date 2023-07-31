import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from '@prisma/client';
import { Observable } from 'rxjs';
import { UserRole } from 'src/accessControl/roles/types/roles.type';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
      'roles',
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) {
      return true; // No roles required, allow access.
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user as User;

    if (!user || !user.role) {
      throw new UnauthorizedException('User or role undefined');
    }
    const hasRole = () =>
      requiredRoles.some((role) => user.role?.includes(role));
    const canActivate = user && user.role && hasRole();

    if (!canActivate) {
      throw new ForbiddenException(
        `User with roles ${user.role} does not have access to this route with roles ${requiredRoles}`,
      );
    }

    return true;
  }
}
