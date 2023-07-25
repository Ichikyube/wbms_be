import { Injectable, CanActivate, ExecutionContext, Logger, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ExtractJwt } from 'passport-jwt';
import { Request } from 'express';
const cookieExtractor = (req: Request) => {
  if (req && req.cookies) {
    return req.cookies['jwt'];
  }
};
@Injectable()
export class AtGuard extends AuthGuard("jwt-access") implements CanActivate {

    private logger = new Logger(AtGuard.name);

    constructor() {
      super();
    }
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      try {
        const { route } = request;

        // Exclude specific routes from authentication
        if (route.path.includes("/signin") || route.path.includes("/signup")) {
          return true;
        }
        const accessToken = ExtractJwt.fromExtractors([cookieExtractor])(request);
  
        if (!accessToken)
          throw new UnauthorizedException('Access token is not set');
  
        return this.activate(context);
      } catch (err) {
        this.logger.error((err as Error).message);
        return false;
      }
    }
  
  async activate(context: ExecutionContext): Promise<boolean> {
      return super.canActivate(context) as Promise<boolean>;
  }
}
