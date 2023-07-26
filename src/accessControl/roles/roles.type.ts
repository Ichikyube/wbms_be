export let Role = {
  STAFF1: 'Staff_Labanan',
  STAFF2: 'Staff_PKS',
  STAFF3: 'Staff_T30',
  SUPERVISOR: 'Supervisor',
  MANAGER: 'Manager',
  MILL_HEAD: 'Mill Head',
  ADMIN: 'Administrator',
};
export type UserRole = (typeof Role)[keyof typeof Role];
export let permission = [
  'read:own',
  'create:own',
  'update:own',
  'delete:own',
  'read:any',
  'create:any',
  'update:any',
  'delete:any'
]
export let MainSite = ['Labanan','T30', 'PKS']


