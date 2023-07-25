import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from 'src/users/entities';

export class CreateRoleDto {
  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  description: string;
}
