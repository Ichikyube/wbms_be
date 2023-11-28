import * as fs from 'fs';
import { AccessControl } from 'accesscontrol';

const grantsObject = JSON.parse(fs.readFileSync('./rbac-policy.json', 'utf8'));
export const ac = new AccessControl(grantsObject);
