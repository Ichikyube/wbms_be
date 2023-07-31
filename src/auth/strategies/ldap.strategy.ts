import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import * as Strategy from 'passport-ldapauth';
import { Request } from 'express';
@Injectable()
export class LdapStrategy extends PassportStrategy(Strategy, "ldap") {
  constructor() {
		super({
			passReqToCallback: true,
			server: {
				url: process.env.LDAP_HOST,
				bindDN: process.env.LDAP_DN,
				bindCredentials: process.env.LDAP_PASSWORD,
				searchBase: process.env.LDAP_BASE_DN,
				searchFilter: process.env.LDAP_SEARCH_FILTER,
			},
		}, async (req: Request, user: any, done) => {
			req.user = user;
			return done(null, user);
		});
  }

  async validate(user: any, done: Function): Promise<any> {
    if (!user) {
      done(new UnauthorizedException(), false);
    }
    done(null, user);
  }
}

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