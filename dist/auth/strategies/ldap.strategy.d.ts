import Strategy = require("passport-ldapauth");
declare const LdapStrategy_base: new (...args: any[]) => Strategy;
export declare class LdapStrategy extends LdapStrategy_base {
    constructor();
    validate(user: any): Promise<any>;
}
export {};
