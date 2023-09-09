// export const BaseRole = {
//   STAFF1: 'Staff_Labanan',
//   STAFF2: 'Staff_PKS',
//   STAFF3: 'Staff_T30',
//   ADMIN: 'Administrator',
// } as const;
// export type UserRole = (typeof BaseRole)[keyof typeof BaseRole];

export type permission = {
  resource: string;
  grants: grants;
};

export type grant = {
  resource: string;
  action: string;
  possession: string;
  attributes: []
};

export type grants = grant[];

export const MainSite = ['Labanan', 'T30', 'PKS'] as const;
export enum action {
  Read = 'read',
  Write = 'write',
  Update = 'update',
  Delete = 'delete',
}

export enum possession {
  OWN = 'own',
  ANY = 'any',
}