import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { Request, Response } from 'express';
export class RtGuard extends AuthGuard('jwt-refresh') {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(request: Request, response: Response): Promise<any> {
    const refreshToken = request.cookies["rt"];    
    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token is not set');
    }
    const userId = request.user["id"];
    const {access_token} = await this.authService.refreshToken(userId, refreshToken, response);
    
    if (!access_token) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
