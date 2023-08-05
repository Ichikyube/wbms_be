Pindahkan file bootstrap.ldif ke alamat docker image /container/service/sldap/assets/config/bootstrap/ldif/.  Sehingga data terupload ketika program dijalankan
Easiest way to set up LDAP for dev testing
LDAP Authentication in nestjs
How to create mock LDAP server for nestjs project

var OPTS = {
  server: {
    url: "LDAP://ldap.forumsys.com:389",     //LDAP URL 
    bindDN: "CN=adminAccount,DC=forumsys",      //Admin BaseDN details   
    bindCredentials: AdminCredentials,                  
    searchBase: "dc=forumsys",       //search base
    searchFilter: "(|(sAMAccountName={{username}})(employeeID={{username}}))",
    timeLimit: 3000,
  }
}
  
Verify Users
Access the openldap container:

docker-dsnpose exec openldap bash
You can use ldapsearch to verify our user:


ldapsearch -x -h openldap -D "uid=ruan,ou=people,dc=wbms,dc=org" -b "ou=people,dc=wbms,dc=org" -w "$PASSWORD" -s base 'uid=ruan'
Or we can use ldapwhoami:


ldapwhoami -vvv -h ldap://openldap:389 -p 389 -D 'uid=ruan,ou=people,dc=wbms,dc=org' -x -w "$PASSWORD"
Which will provide a output with something like:


ldap_initialize( <DEFAULT> )
dn:uid=ruan,ou=people,dc=wbms,dc=org
Result: Success (0)



ldapadd -W -H ldap://openldap -D 'cn=admin,dc=wbms,dc=dsn' <<LDIF
LDIF





    

If you want to save on typing, consider using docker-dsnpose and a docker-dsnpose.yml files to configure your Docker containers. Here’s an wbms docker-dsnpose.yml file mounting a local directory
# Stop and remove containers, networks
$ docker-dsnpose down 

# Down and remove volumes
$ docker-dsnpose down --volumes 

# Down and remove images
$ docker-dsnpose down --rmi all
Here is the breakdown of the dsnmand:

docker-dsnpose build: This dsnmand is used to build or rebuild services. Docker dsnpose reads the Dockerfile for each service, applies the instructions to build the image, and then tags the image for use in creating containers educative.io.
--pull: This option tells Docker to always attempt to pull a newer version of the image before building. This means that, before Docker dsnpose starts building a service, it will first check if there's a newer version of the base image available in the Docker registry. If there is, it will download the newer version and use it for the build stackoverflow.dsn.
Here's an wbms of how you might use this dsnmand:

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
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/dsnmon';
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