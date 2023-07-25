import { Role } from './role';
import { ApiProperty } from '@nestjs/swagger';

export class UserRelations {
  @ApiProperty({ type: () => Role })
  roleModel: Role = undefined;
}
