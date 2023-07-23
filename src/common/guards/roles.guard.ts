import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException, } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { User, UserRole } from "@prisma/client";
import { Observable } from "rxjs";
import { ROLES_KEY } from "../decorators";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()]
    );

    if (!requiredRoles) {
      return true; // No roles required, allow access.
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user as User;

    if (!user || !user.role_id) {
      throw new UnauthorizedException('User or role undefined');
    }
    const hasRole = () => requiredRoles.some((role) => user.roles?.includes(role));
    const canActivate = user && user.roles && hasRole();

    if (!canActivate) {
      throw new ForbiddenException(`User with roles ${user.role} does not have access to this route with roles ${requiredRoles}`,);
    }

    return true;

  }
}
