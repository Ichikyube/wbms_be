docker image on almyra/wbms_bet:v1.1
Easiest way to set up LDAP for dev testing
LDAP Authentication in nestjs
How to create mock LDAP server for nestjs project

LDAP-Auth
Transaction
Config

Verify Users
Access the openldap container:

docker-compose exec openldap bash
You can use ldapsearch to verify our user:


ldapsearch -x -h openldap -D "uid=ruan,ou=people,dc=example,dc=org" -b "ou=people,dc=example,dc=org" -w "$PASSWORD" -s base 'uid=ruan'
Or we can use ldapwhoami:


ldapwhoami -vvv -h ldap://openldap:389 -p 389 -D 'uid=ruan,ou=people,dc=example,dc=org' -x -w "$PASSWORD"
Which will provide a output with something like:


ldap_initialize( <DEFAULT> )
dn:uid=ruan,ou=people,dc=example,dc=org
Result: Success (0)

You can share your code with a started container by using bind mounts, instead of creating a new image on each change. Here’s how you can mount a local directory “./source_dir” when starting a new container using the Docker CLI:

$ docker run -it -v "$(pwd)/source_dir:/app/target_dir" ubuntu bash
# OR
$ docker run -it --mount "type=bind,source=$(pwd)/source_dir,target=/app/target_dir" ubuntu bash
You can read more about it in the docs about bind mount. The -v is the old way to do it, you can provide it with an absolute path to a host directory and tell it where to mount it inside of the container after a colon. The --mount flag is newer, and a bit more verbose.

We’re looking the current directory up using $(pwd) dynamically. When you run this command, the $(pwd) part is replaced by your current directory path.

If you want to save on typing, consider using docker-compose and a docker-compose.yml files to configure your Docker containers. Here’s an example docker-compose.yml file mounting a local directory



# Stop and remove containers, networks
$ docker-compose down 

# Down and remove volumes
$ docker-compose down --volumes 

# Down and remove images
$ docker-compose down --rmi all
Here is the breakdown of the command:

docker-compose build: This command is used to build or rebuild services. Docker Compose reads the Dockerfile for each service, applies the instructions to build the image, and then tags the image for use in creating containers educative.io.
--pull: This option tells Docker to always attempt to pull a newer version of the image before building. This means that, before Docker Compose starts building a service, it will first check if there's a newer version of the base image available in the Docker registry. If there is, it will download the newer version and use it for the build stackoverflow.com.
Here's an example of how you might use this command:

$ docker-compose build --pull
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