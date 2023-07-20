import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import Strategy = require("passport-ldapauth");

@Injectable()
export class LdapStrategy extends PassportStrategy(Strategy, "ldap") {
  constructor() {
    super({
      server: {
        url: "ldap://your-ldap-server-url", // Replace with your LDAP server URL
        bindDN: "cn=admin,dc=example,dc=com", // Replace with the bind DN (Distinguished Name)
        bindCredentials: "your-bind-password", // Replace with the bind password
        searchBase: "ou=users,dc=example,dc=com", // Replace with the search base
        searchFilter: "(uid={{username}})", // Replace with the search filter
      },
    });
  }

  async validate(user: any) {
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
