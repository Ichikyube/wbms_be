import { Injectable } from '@nestjs/common';
import * as ldap from 'ldapjs';

@Injectable()
export class LdapAuthService {
  async authenticate(username: string, password: string): Promise<boolean> {
    const ldapUrl = process.env.LDAP_HOST;
    const ldapBaseDN = process.env.LDAP_BASE_DN; // The Base DN of your LDAP server
    const ldapDN = process.env.LDAP_DN;
    const client = ldap.createClient({
      url: ldapUrl,
    });

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/g;
    const isEmail = emailRegex.test(username);

    if (isEmail) {

        return new Promise<boolean>((resolve, reject) => {
          client.bind(ldapDN, "admin", function (err) {
            if (err) {
              console.log("OH no", err);
              client.unbind();
              reject(err);
              return;
            }
          client.search(
            `ou=employees,${ldapBaseDN}`,
            {
              scope: 'sub',
              filter: `(mail=${username})`,
            },
            function (err, res) {
              if (err) {
                console.log(err);
                client.unbind();
                reject(err);
                return;
              }

              res.on('entry', function (entry) {
                console.log(entry.object);
              });

              res.on('end', function () {
                client.unbind();
                resolve(true);
              });
            },
          );
        });
      });
    }
    return new Promise<boolean>((resolve, reject) => {
      client.bind(
        `uid=${username},ou=employees,${ldapBaseDN}`,
        password,
        (err) => {
          client.unbind(); // Always unbind

          if (err) {
            // LDAP authentication failed
            reject(err); // Reject with the error
          } else {
            // LDAP authentication successful
            resolve(true);
          }
        },
      );
    });
  }
}
