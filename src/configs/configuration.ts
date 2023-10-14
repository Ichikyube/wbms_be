import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

export const YAML_CONFIG_FILENAME = './configs/config.yaml';
console.log(join(__dirname, YAML_CONFIG_FILENAME))
export default () => {
  return yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>;
};