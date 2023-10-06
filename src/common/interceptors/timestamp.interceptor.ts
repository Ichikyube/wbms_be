// timestamp.interceptor.ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TimestampInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const userId = req.userId; // User ID from the request object

    return next.handle().pipe(
      map(data => {
        if (data && Array.isArray(data)) {
          data.forEach(entity => this.updateTimestamps(entity, userId));
        } else if (data) {
          this.updateTimestamps(data, userId);
        }
        return data;
      }),
    );
  }
  
  private updateTimestamps(entity: any, userId: string) {
    if (!entity.userCreated) {
      entity.userCreated = userId;
    }
    entity.userModified = userId;
  }
}
