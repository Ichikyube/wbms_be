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
