import { Site } from './site';
import { Company } from './company';
import { ApiProperty } from '@nestjs/swagger';

export class MillRelations {
  @ApiProperty({ type: () => Site })
  site: Site = undefined;

  @ApiProperty({ type: () => Company })
  company: Company = undefined;
}
