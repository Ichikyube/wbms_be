docker image on almyra/wbms_bet:v1.1
Easiest way to set up LDAP for dev testing
LDAP Authentication in nestjs
How to create mock LDAP server for nestjs project

LDAP-Auth
Transaction
Config
var ldapstrategy = require('passport-ldapauth');

// connect to LDAP server

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

  async generateAC(): Promise<RolesBuilder> {
    const roles = await this.getRoles();
    let result = roles.map(role => {
      return role.permissions.map(permission => {
        let { action, possession, attributes } = permission.grant
        let resource =role.permission.resource
        return { role: role.name, resource, action, possession, attributes }
      })
    })
    let grants = []
    if (result) {
      result.forEach((grant) => grants = grants.concat(grant))
      const ac = JSON.stringify(roles);
      fs.writeFileSync('./rbac-policy.json', result);
    }
    return new RolesBuilder(grants)
  }
  
  async mapToGrantsObject(jsonData) {
    if (typeof jsonData === "object" && !Array.isArray(jsonData)) {
      const result = {};
      for (const [key, value] of Object.entries(jsonData)) {
        result[key] = this.mapToGrantsObject(value);
      }
      return result;
    } else if (Array.isArray(jsonData)) {
      const permissions = jsonData.map(permission => {
        const action = permission.action;
        const possession = permission.possession;
        const attributes = permission.attributes;
        return `${action}:${possession}:${attributes}`;
      });
      return { permissions };
    } else {
      return jsonData;
    }
  }


    // let result = roles.map(role => {
    //   let permissionsList = role.permissions.map(permission => {
    //     let grants = permission.grants.map(grant=>{
    //       let { action, possession, attributes } = grant
    //       return { action, possession, attributes }
        
    //     })
    //     let resource = permission.resource
    //     return { resource, grants }
    //   })
    //   return console.log(permissionsList.map(permission=>{
    //     return {[permission.resource]: permission.grants.map(grant=>{
    //       return {action: grant.action, possession: grant.possession, attributes: grant.attributes}
    //     })}
      
    //   }))
    // })
    // let grants = []
    // if (result) {
    //   result.forEach((grant) => grants = grants.concat(grant))
    //   console.log(grants)
    //   const ac = JSON.stringify(grants);
    //   fs.writeFileSync('./rbac-policy.json', ac);
    // }
    // console.log(this.mapToGrantsObject(roles))

  openldap:
    image: osixia/openldap:latest
    container_name: openldap
    hostname: openldap #ldap://0.0.0.0:1389
    ports:
      - "389:389"
      - "636:636"
    environment:
      - LDAP_ORGANISATION=wbms
      - LDAP_DOMAIN=wbms.dsn
      - LDAP_ADMIN_USERNAME=admin
      - LDAP_ADMIN_PASSWORD=admin_pass
      - LDAP_CONFIG_PASSWORD=config_pass
      - "LDAP_BASE_DN=dc=wbms,dc=dsn"
      - LDAP_TLS=no
      - LDAP_READONLY_USER=true
      - LDAP_READONLY_USER_USERNAME=user-ro
      - LDAP_READONLY_USER_PASSWORD=ro_pass
    tty: true
    stdin_open: true
    volumes:
      - ./data/certificates:/container/service/slapd/assets/certs
      - ./data/slapd/database:/var/lib/ldap
      - ./data/slapd/config:/etc/ldap/slapd.d
    networks:
      - armin-net
  phpldapadmin:
    image: osixia/phpldapadmin:latest
    container_name: phpldapadmin
    environment:
      PHPLDAPADMIN_LDAP_HOSTS: "openldap"
      PHPLDAPADMIN_HTTPS: "false"
    ports:
      - "18080:80"
    depends_on:
      - openldap
    networks:
      - armin-net
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

You can share your code with a started container by using bind mounts, instead of creating a new image on each change. Here’s how you can mount a local directory “./source_dir” when starting a new container using the Docker CLI:

$ docker run -it -v "$(pwd)/source_dir:/app/target_dir" ubuntu bash
# OR
$ docker run -it --mount "type=bind,source=$(pwd)/source_dir,target=/app/target_dir" ubuntu bash
You can read more about it in the docs about bind mount. The -v is the old way to do it, you can provide it with an absolute path to a host directory and tell it where to mount it inside of the container after a colon. The --mount flag is newer, and a bit more verbose.

We’re looking the current directory up using $(pwd) dynamically. When you run this dsnmand, the $(pwd) part is replaced by your current directory path.

If you want to save on typing, consider using docker-dsnpose and a docker-dsnpose.yml files to configure your Docker containers. Here’s an wbms docker-dsnpose.yml file mounting a local directory
ldapadd -W -H ldap://openldap -D 'cn=admin,dc=wbms,dc=dsn' <<LDIF
# Create a new organization
dn: dc=wbms,dc=dsn
objectClass: dcObject
objectClass: organization
dc: wbms
o: My Organization
description: The wbms organization

# Create role for the directory manager
dn: cn=Manager,dc=wbms,dc=dsn
objectClass: organizationalRole
cn: Manager
description: Directory Manager

# Create unit for groups
dn: ou=groups,dc=wbms,dc=dsn
objectClass: top
objectClass: organizationalUnit
ou: groups
description: Organizational unit for user groups

# Create unit for people
dn: ou=people,dc=wbms,dc=dsn
objectClass: top
objectClass: organizationalUnit
ou: people
description: Organizational unit for user accounts

# Create a test user in the people unit
dn: uid=test,ou=people,dc=wbms,dc=dsn
objectClass: top
objectClass: person
objectClass: posixAccount
uid: test
cn: Test User
sn: Test
uidNumber: 10001
gidNumber: 100
homeDirectory: /home/test
loginShell: /bin/bash
LDIF


ldapadd -W -H ldap://openldap -D 'cn=admin,dc=wbms,dc=dsn' <<LDIF
# Creating ops group in the groups unit
dn: cn=ops,ou=armin,dc=wbms,dc=dsn
objectClass: top
objectClass: posixGroup
objectClass: groupOfMembers
cn: ops
gidNumber: 10001
description: Operations Group
LDIF
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

$ docker-dsnpose build --pull
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
} from '@nestjs/dsnmon';
    
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