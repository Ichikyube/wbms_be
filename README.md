Todo
backend
ldap(sso(Single-SignOn)),
config
inject Admin IT, Admin System ke role
Buat superAdmin(AdminIT)
Transaction



frontend
role,
auth
role,


Pindahkan file bootstrap.ldif ke alamat docker image /container/service/sldap/assets/config/bootstrap/ldif/. Sehingga data terupload ketika program dijalankan
Easiest way to set up LDAP for dev testing
LDAP Authentication in nestjs
How to create mock LDAP server for nestjs project

var OPTS = {
server: {
url: "LDAP://ldap.forumsys.com:389", //LDAP URL
bindDN: "CN=adminAccount,DC=forumsys", //Admin BaseDN details  
 bindCredentials: AdminCredentials,  
 searchBase: "dc=forumsys", //search base
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

websocket server-sent event
ldap
rbac
edit role
config
 ldapadd -x -D 'cn=admin,dc=wbms,dc=dsn' -w admin -h ldap://openldap:389 -p 389  -f  '/assets/openldap/custom/ldif/bootstrap.ldif'
 ldapsearch -x -b dc=field,dc=aerospike,dc=com -D "cn=admin,dc=field,dc=aerospike,dc=com" -w admin '(uid=aerospike)'
 ldapsearch -x -b dc=field,dc=aerospike,dc=com -D "cn=admin,dc=field,dc=aerospike,dc=com" -w admin
 ldapsearch -x -b dc=field,dc=aerospike,dc=com -D "cn=admin,dc=field,dc=aerospike,dc=com" -w admin '(memberUid=aerospike)'
ldapsearch -x -h ldap://openldap:389 -p 389  -D "cn=admin,dc=wbms,dc=dsn"  -w admin -s base 'dc=wbms,dc=dsn'
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


import { Observable } from 'rxjs';

function listenForEvents(element, eventName) {
  return new Observable(subscriber => {
    // Create an event handler
    const handler = event => {
      subscriber.next(event);
    };

    // Attach the event handler
    element.addEventListener(eventName, handler);

    // Return a cleanup function
    return () => {
      // Detach the event handler
      element.removeEventListener(eventName, handler);
    };
  });
}



Lightweight Directory Access Protocol (LDAP)
LDAP (Lightweight Directory Access Protocol) is a software protocol for enabling anyone to locate organizations, individuals, and other resources such as files and devices in a network, whether on the public Internet or on a corporate intranet.
An LDAP directory is organized in a simple “tree” hierarchy consisting of the following levels:

The root directory (the starting place or the source of the tree), which branches out to
Countries, each of which branches out to
Organizations, which branch out to
Organizational units (divisions, departments, and so forth), which branches out to (includes an entry for)
Individuals (which includes people, files, and shared resources such as printers)
Default Port: 389
Operation on LDAP:
Search — Performs a search operation against the LDAP server. Responses from the search method are an Event Emitter where you will get a notification for each search Entry that comes back from the server. You will additionally be able to listen for a search Reference, error and end event.
Add — This is used to insert a new entry into the directory-to-server database. If the name entered by a user already exists, the server fails to add a duplicate entry and instead show an “entryAlreadyExists” message.
Bind — On connection with the LDAP server,the default authentication state of the session is anonymous.
Delete — As the name suggests,this operation is used to delete an entry from the directory.In order to do this, the LDAP client has to transmit a perfectly composed delete request to server.
Modify — This operation is used by LDAP clients to make a request for making changes to the already existing database. The change to be made must be one of the following operations:
Add(Including a new value)
Delete(Deleting an already existing value)
Replace(Overwriting an existing value with a new one)
Unbind — This is inverse of the bind operation. Unbind aborts any existing operations and terminates the connection, leaving no response in the end.
Attributes:

Distinguished Name:(Mandatory) Known as dn.
Object classes: It indicates the type of attributes,schemas associated with the object class.(Example: person, top, posixGroup, posixAccount, uidObject etc.)
Attribute Types: It defines the list of attributes that have been used to customize the schema. (Example: gidNumber, uidNumber, cn, givenName, sn )
JSON WEB TOKEN (JWT)
Traditional authentication strategy makes use of session and cookie, but scaling these solutions is very difficult as some kind of state is maintained by the server.JWT, on the other hand, provide a stateless solution for authentication and stateless applications are pretty easy to scale.

JWT is used for authentication and they can also be used for sharing information, most of jwt are signed using a public key and a private key, therefore, it is very difficult to tamper with these token. Jwt has three parts: head, body and signature, each separated by “dot(.)”.

Verification
When the server verifies the token, it creates the hash using the private key if the hash matches the signature on the token then the token is authentic. If the token is tempered with the hash of the token should change but the hacker cannot create the new hash because the key is save with the server. Therefore the token is verified and the client can also be verified using the data in the body.

token=base64url(head)+"."+baser64url(body)+"."+signature
How authentication with JWT works?
The token with username and role is given to the client and the client sends the token back to the server every time the client makes an HTTP request to the server.

body={
 username:"l1s15bscs0105",
 role: "group the user_id belongs to"
}
The client must store the token in the browser. The token can be saved in local storage or session storage. The token is sent to the server in authorization header as Bearer {token} .

Using JWT and OpenLDAP with Nodejs.
If you don’t want to write your own custom jwt solution you can always use an NPM module for it. We would first install express and JSON web token library. Here I am assuming that you have OpenLDAP server configured and up running on Default Port: 389.

npm i express jsonwebtoken express-jwt ldapjs
The directory structure of the project

root
   -index.js
   -config.js
   -authentication
         - auth.js
The config.js contains the private key but it is not a good practice. you should always use env variable for such sensitive data.

const config = {secret : "YUYFDISYFSIERTEWRTEWTWETRNNNMNJHKHFASDdyfiudayDAYIUSDFYASIOFOOASIUDFYEREAHLSKJFE57894502354354HJKAFDDFS"}
module.exports = config;
Let us create a simple express server.

The route /login which takes username and password as the body parameters, first binds the admin to LDAP server and then searches the user’s group by the filter of username and attribute of gidNumber and finally binds the username and password and if successful then issues a token to the user with username and role added as a part of token. Below is the implementation for the this route.

const express = require('express');
const router = express.Router();
const auth = require('./authentication/auth');
var ldap = require('ldapjs')
const jwt = require('jsonwebtoken');
const {secret} = require("./config");var client = ldap.createClient({
url: `ldap://ldap-service:389`,
connectTimeout: 30000,
reconnect: true
});router.post('/login', function(req, res){
   var LDAP_BASE_DN = 'dc=scytalelabs, dc=com';
   var bdn_pass = 'adminPassword';
   var username = req.body.username;
   var password = req.body.password;
var opts = {
   filter: `(uid=${username})`,
   scope: 'sub',
   attributes: ['gidNumber', 'uidNumber' ,'cn','givenName','sn']};try {
     client.bind(  'cn=admin, ' + LDAP_BASE_DN, bdn_pass, function(error) {
  if(error){res.status(500).send('Internal Server Error.');}
  else {
    client.search(LDAP_BASE_DN , opts, function(error, search) {
    var searchList = [];
    search.on('searchEntry', function(entry) {
     searchList.push(entry.object);
     });    search.on('error', function(error) {
     res.status(500).send('Internal Server Error.');
    });    search.on("end", (retVal) => {
     if (searchList.length === 1) {
      // Get a list of groups, try to bind after you get it
      var groupList = [];
      
      client.search(LDAP_BASE_DN,{filter:'((objectclass=posixGroup)(gidNumber=' +   
        searchList[0].gidNumber + '))',
        scope:"sub", attributes:['cn']},      
    (error, searchRes) => {    searchRes.on("searchEntry", (entry) => {
    groupList.push(entry.object);
     });     searchRes.on("error", (error) => {
     res.status(500).send('Internal Server Error.');
     });searchRes.on("end", (entry) => {
     if(groupList.length === 1){
      client.bind(  'cn=' + username +
      ',ou=users,dc=scytalelabs,dc=com', password, function 
        (error) {
          if(error){
          res.status(500).send('Internal Server Error.');
         }
         else {
          const token = jwt.sign({ sub: username, role:   
          groupList[0].cn }, secret, {expiresIn: '1h'});    client.unbind(function(error) {
     if(error){
      res.status(500).send('Internal Server Error.');
      }
     else{
     res.status(200).send(token);
     }
});
}
});
}
else{
res.status(404).send('Group Not Found...');
}
});
});
}
else {
res.status(404).send('User Not Found...');
}
});
});
}
});
} 
catch(error){
client.unbind(function(error) {if(error){console.log(error  );} else{console.log('client disconnected');}});
}
});
The token is sent by the user to the server every time in the request header and the token is authenticated by the auth.isLoggedIn(['role']) middleware every time. The middleware also adds user details to the req as req.user . This middleware should be added to every route that needs to be protected with the allowed roles for the route. Below is the implementation for this middleware.

const expressJwt = require('express-jwt');
const {secret} = require("../config");
exports.isLoggedIn = function (roles = []) {// roles param can be a single role string (e.g. Role.User or
//'User')// or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', //'User'])if (typeof roles === 'string') {
    roles = [roles];
}return [
// authenticate JWT token and attach user to request object //(req.user)
    
       expressJwt({ secret }),
// authorize based on user role
      (req, res, next) => {
       if (roles.length && !roles.includes(req.user.role)) {
         // user's role is not authorized
  return res.status(401).json({ message: 'Unauthorized Access' });
}// authentication and authorization successful
next();
}];
}