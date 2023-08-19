import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from './user.entity';

export class ProfileEntity {
  @ApiProperty() id: string;
  @ApiProperty() userId: string;
  @ApiProperty() name: string;
  @ApiProperty() profilePic: string | null;
  @ApiProperty() phone: string | null;
  @ApiProperty() doB: Date | null;
  @ApiProperty() division: string;
  @ApiProperty() position: string;
  @ApiProperty() alamat: string | null;
  userCreated: string | null;
  userModified: string | null;
  dtCreated: Date;
  dtModified: Date | null;
  user?: UserEntity;
}
