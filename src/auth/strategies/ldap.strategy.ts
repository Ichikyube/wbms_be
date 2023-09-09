import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as Strategy from 'passport-ldapauth';
import { Request } from 'express';
@Injectable()
export class LdapStrategy extends PassportStrategy(Strategy, 'ldapauth') {
  constructor() {
    super(
      {
        passReqToCallback: true,
        server: {
          url: process.env.LDAP_HOST,
          bindDN: process.env.LDAP_DN,
          bindCredentials: process.env.LDAP_PASSWORD,
          searchBase: process.env.LDAP_BASE_DN,
          searchFilter: '(uid={{username}})(mail={{email}})',
        },
      },
      async (req: Request, user: any, done) => {
        req.user = user;
        return done(null, user);
      },
    );
  }
}
// var OPTS = {
//   server: {
//     url: 'LDAP://ldap.forumsys.com:389', //LDAP URL
//     bindDN: 'CN=adminAccount,DC=forumsys', //Admin BaseDN details
//     bindCredentials: AdminCredentials,
//     searchBase: 'dc=forumsys', //search base
//     searchFilter: '(|(sAMAccountName={{username}})(employeeID={{username}}))',
//     timeLimit: 3000,
//   },
// };
// Example POST:
// curl --request POST \
//   --url http://localhost:3000/ldap \
//   --header 'Content-Type: application/json' \
//   --data '{
// 	"username": "gauss",
// 	"password": "password"
// }'
//
// ==============================================
//
// Example response:
// {
// 	"dn": "uid=gauss,dc=example,dc=com",
// 	"controls": [],
// 	"objectClass": [
// 		"inetOrgPerson",
// 		"organizationalPerson",
// 		"person",
// 		"top"
// 	],
// 	"cn": "Carl Friedrich Gauss",
// 	"sn": "Gauss",
// 	"uid": "gauss",
// 	"mail": "gauss@ldap.forumsys.com"
// }
