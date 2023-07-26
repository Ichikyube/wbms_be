export enum Action {
  READ = 'READ',
  WRITE = 'WRITE',
  DELETE = 'DELETE',
}

export enum Possession {
  OWN = 'OWN',
  ANY = 'ANY',
}

export interface PermissionAction {
  Action: Possession;
}
// [action: string]: Possession;

