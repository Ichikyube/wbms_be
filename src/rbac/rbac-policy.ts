import { RolesBuilder } from 'nest-access-control';
import { Role } from 'src/auth/types/roles.type';


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
