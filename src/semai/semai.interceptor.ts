import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
} from '@nestjs/common';
import { Observable, of, throwError, timer } from 'rxjs';
import { catchError, retry, retryWhen, mergeMap, tap } from 'rxjs/operators';
import { AxiosService } from './axios.service';
import { ErrorHttpStatusCode } from '@nestjs/common/utils/http-error-by-code.util';
import { exec } from 'child_process';
import { reject } from 'lodash';
@Injectable()
export class SemaiAxiosInterceptor implements NestInterceptor {
  constructor(private readonly axiosService: AxiosService) {}

  // create interceptor if failed fetch using axios, then switch url and refetch, if fetch succeded then run change url permanently
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();

    await this.axiosService.switchUrlAndRefetch();

    return next.handle().pipe(
      tap((response) => {
        if(response.status === true && this.axiosService.switchedDomain === true)
          this.axiosService.switchDomain();
      }),
    );
  }
}
