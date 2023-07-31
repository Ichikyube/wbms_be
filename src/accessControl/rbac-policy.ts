import { RolesBuilder } from 'nest-access-control';
import { AccessControl } from 'accesscontrol';
import { BaseRole } from './roles/types/roles.type';

export const RBAC_POLICY: RolesBuilder = new RolesBuilder();

// This is actually how the grants are maintained internally.
let grantsObject = {
  admin: {
    video: {
      'create:any': ['*', '!views'],
      'read:any': ['*'],
      'update:any': ['*', '!views'],
      'delete:any': ['*'],
    },
  },
  user: {
    video: {
      'create:own': ['*', '!rating', '!views'],
      'read:own': ['*'],
      'update:own': ['*', '!rating', '!views'],
      'delete:own': ['*'],
    },
  },
};
const ac = new AccessControl(grantsObject);
// ac.setGrants(grantsObject);
// console.log(ac.getGrants());

// const permission = ac.can('user').createOwn('video');
// console.log(permission.granted);    // —> true
// console.log(permission.attributes); // —> ['*'] (all attributes)

// permission = ac.can('admin').updateAny('video');
// console.log(permission.granted);    // —> true
// console.log(permission.attributes); // —> ['title']
// ac.grant('admin').readAny('video', ['*']);
// ac.grant('user').readOwn('video', ['*', '!id']);
// ac.grant('user').readOwn('account', ['*', '!record.id']);


// grant list fetched from DB (to be converted to a valid grants object, internally)
// let grantList = [
//   {
//     role: 'admin',
//     resource: 'video',
//     action: 'create:any',
//     attributes: '*, !views',
//   },
//   { role: 'admin', resource: 'video', action: 'read:any', attributes: '*' },
//   {
//     role: 'admin',
//     resource: 'video',
//     action: 'update:any',
//     attributes: '*, !views',
//   },
//   { role: 'admin', resource: 'video', action: 'delete:any', attributes: '*' },

//   {
//     role: 'user',
//     resource: 'video',
//     action: 'create:own',
//     attributes: '*, !rating, !views',
//   },
//   { role: 'user', resource: 'video', action: 'read:any', attributes: '*' },
//   {
//     role: 'user',
//     resource: 'video',
//     action: 'update:own',
//     attributes: '*, !rating, !views',
//   },
//   { role: 'user', resource: 'video', action: 'delete:own', attributes: '*' },
// ];


// //