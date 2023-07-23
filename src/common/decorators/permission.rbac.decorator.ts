import { SetMetadata } from '@nestjs/common';
import { Action } from 'src/casl/Action';


export const CHECK_PERMSSION_KEY = 'checkPermissionKey';

export type RequiredPermission = [Action];

export const CheckPermission = (...params: RequiredPermission[]) =>
  SetMetadata(CHECK_PERMSSION_KEY, params);
