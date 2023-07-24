export const Role = {
  ADMIN: 'Administrator',
  STAFF: 'Staff',
  SUPERVISOR: 'Supervisor',
  MANAGER: 'Manager',
  MILL_HEAD: 'MillHead',
} as const;

export type UserRole = (typeof Role)[keyof typeof Role];
