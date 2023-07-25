import { Site } from './site';
import { ApiProperty } from '@nestjs/swagger';

export class ConfigRelations {
  @ApiProperty({ type: () => Site })
  site: Site = undefined;
}
