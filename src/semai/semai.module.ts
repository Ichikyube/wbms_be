import { Global, Module, Scope } from '@nestjs/common';
import { SemaiService } from './semai.service';
import { SemaiController } from './semai.controller';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AxiosInterceptor } from '@narando/nest-axios-interceptor';
import { AxiosService } from './axios.service';
import { SemaiAxiosInterceptor } from './semai.interceptor';

@Global()
@Module({
  imports: [HttpModule],
  controllers: [SemaiController],
  providers: [
    SemaiService,
    AxiosService,
    SemaiAxiosInterceptor,
    {
      provide: 'AXIOS_INSTANCE_TOKEN',
      useExisting: HttpService,
    },
  ],
  exports: [SemaiService],
})
export class SemaiModule {}
