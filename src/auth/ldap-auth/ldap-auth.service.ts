import { Injectable } from '@nestjs/common';
import * as ldap from 'ldapjs';

@Injectable()
export class LdapAuthService {
  async authenticate(username: string, password: string): Promise<boolean> {
    const ldapUrl = process.env.LDAP_HOST;
    const ldapBaseDN = process.env.LDAP_BASE_DN; // The Base DN of your LDAP server

    const client = ldap.createClient({
      url: ldapUrl,
    });

    return new Promise<boolean>((resolve, reject) => {
      client.bind(`cn=${username},${ldapBaseDN}`, password, (err) => {
        if (err) {
          // LDAP authentication failed
          resolve(false);
        } else {
          // LDAP authentication successful
          resolve(true);
        }
        client.unbind();
      });
    });
  }

}
