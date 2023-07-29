docker image on almyra/wbms_bet:v1.1
Easiest way to set up LDAP for dev testing
LDAP Authentication in nestjs
How to create mock LDAP server for nestjs project
https://docs.docker.com/docker-hub/builds/
https://docs.github.com/en/actions/quickstart


docker tag local-image:tagname new-repo:tagname
docker push new-repo:tagname
# Example of running OpenLDAP in a Docker container
docker run --name my-openldap-container --detach osixia/openldap:1.4.0

      run: docker build . --file src/MasterReport.UI/Dockerfile --tag eriksongm/master-report:${{ secrets.MAJOR }}.${{ secrets.MINOR }}
    -
      name: Push to DockerHub
      run: docker push eriksongm/master-report:${{ secrets.MAJOR }}.${{ secrets.MINOR }}
    -
      name: Update Minor version
      uses: hmanzur/actions-set-secret@v2.0.0
      with:
        name: 'MINOR'
        value: $((${{ secrets.MINOR }}+1))
        repository: EriksonGM/MasterReport
        token: ${{ secrets.REPO_ACCESS_TOKEN }}

import {
    Body,
    Controller,
    Get,
    Param,
    Res,
    HttpStatus,
} from '@nestjs/common';
    
@Get('/users-listing')
// @UseGuards(AuthGuard('jwt'))
// @Roles('Super Admin')
@ApiOperation({ title: 'Lists of users' })
@ApiOkResponse({})
async getAllUsers(@Res() res) {
    const users = this.usersService.findAllUsers();
    return res.status(HttpStatus.OK).json({
        status: 'success',
        data: {
            users,
        }
    });
}

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  statusCode: number;
  message: string;
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => ({
        statusCode: context.switchToHttp().getResponse().statusCode,
        reqId: context.switchToHttp().getRequest().reqId,
        message: data.message || '',
        data: data,
      }))
    );
  }
}