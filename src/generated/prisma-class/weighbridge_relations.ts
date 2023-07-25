import { Site } from './site';
import { ApiProperty } from '@nestjs/swagger';

export class WeighbridgeRelations {
  @ApiProperty({ type: () => Site })
  site: Site = undefined;
}
