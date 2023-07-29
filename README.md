docker image on almyra/wbms_bet:v1.1
Easiest way to set up LDAP for dev testing
LDAP Authentication in nestjs
How to create mock LDAP server for nestjs project

LDAP-Auth
Transaction
Config


# Example of running OpenLDAP in a Docker container
docker run --name my-openldap-container --detach osixia/openldap:1.4.0
    - name: Test
      run: |
        echo $RELEASE_VERSION
        echo ${{ env.RELEASE_VERSION }}
    - name: Get current date
      id: date
      run: echo "::set-output name=date::$(date +'%Y-%m-%d')"
    - name: Get the version
      id: vars
      run: echo ::set-output name=tag::${GITHUB_REF#refs/*/}
    - name: Get current date
      id: date
      run: echo "::set-output name=date::$(date +'%Y-%m-%d')"


    - name: Build the tagged Docker image
      if: ${{ github.event.release }}
      run: docker build . --file Dockerfile --tag wbms_tbe:${{steps.vars.outputs.tag}}
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
timestamp=$(date +%Y%m%d%H%M%S)
$(git rev-parse --short HEAD)
$(docker images | awk '(\$1 == "your/project") {print \$2 += .01; exit}')

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