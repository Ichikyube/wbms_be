import { RolesBuilder } from 'nest-access-control';
import { AccessControl } from 'accesscontrol';
import { Role } from './roles/roles.type';

export const RBAC_POLICY: RolesBuilder = new RolesBuilder();

// prettier-ignore
RBAC_POLICY
  .grant(Role.STAFF)
    .readOwn('employeeData')
  .grant(Role.MANAGER)
    .extend(Role.STAFF)
    .read('managedEmployeeData')
    .read('employeeDetails')
  .grant(Role.ADMIN)
    .extend(Role.MANAGER)
    .read('employeeData')
    .update('employeeData')
    .delete('employeeData')
  .deny(Role.ADMIN)
    .read('managedEmployeeData')

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

// grant list fetched from DB (to be converted to a valid grants object, internally)
let grantList = [
  {
    role: 'admin',
    resource: 'video',
    action: 'create:any',
    attributes: '*, !views',
  },
  { role: 'admin', resource: 'video', action: 'read:any', attributes: '*' },
  {
    role: 'admin',
    resource: 'video',
    action: 'update:any',
    attributes: '*, !views',
  },
  { role: 'admin', resource: 'video', action: 'delete:any', attributes: '*' },

  {
    role: 'user',
    resource: 'video',
    action: 'create:own',
    attributes: '*, !rating, !views',
  },
  { role: 'user', resource: 'video', action: 'read:any', attributes: '*' },
  {
    role: 'user',
    resource: 'video',
    action: 'update:own',
    attributes: '*, !rating, !views',
  },
  { role: 'user', resource: 'video', action: 'delete:own', attributes: '*' },
];
const ac = new AccessControl(grantList);
// ac.setGrants(grantsObject);
// console.log(ac.getGrants());

// role: {
//   resource: {action, attributes},
