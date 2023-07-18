import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class AtGuard extends AuthGuard("jwt-access") implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { route } = request;

    // Exclude specific routes from authentication
    if (route.path.includes("/signin") || route.path.includes("/signup")) {
      return true;
    }

    return super.canActivate(context);
  }
}
