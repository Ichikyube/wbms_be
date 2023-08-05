export const BaseRole = {
  STAFF1: 'Staff_Labanan',
  STAFF2: 'Staff_PKS',
  STAFF3: 'Staff_T30',
  ADMIN: 'Administrator',
} as const;
export type UserRole = (typeof BaseRole)[keyof typeof BaseRole];

export const permission = [
  'read:own',
  'create:own',
  'update:own',
  'delete:own',
  'read:any',
  'create:any',
  'update:any',
  'delete:any',
] as const;

export const MainSite = ['Labanan', 'T30', 'PKS'] as const;
