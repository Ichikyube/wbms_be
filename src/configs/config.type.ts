export type Status = 'ACTIVE' | 'DISABLED';

export const ConfigDataType = {
  boolean: 'boolean',
  string: 'string',
  number: 'number',
  bigint: 'bigint',
  array: 'array',
  object: 'object',
} as const;
export type ConfigType = (typeof ConfigDataType)[keyof typeof ConfigDataType];
