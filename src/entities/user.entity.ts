import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { ProfileEntity } from './profile.entity';

export class UserEntity implements User {
  @ApiProperty() id: string;

  @ApiProperty() username: string;
  @ApiProperty() email: string;
  @ApiProperty() nik: string;

  @ApiProperty() roleId: number;
  @ApiProperty() role: string;

  @ApiProperty() hashedPassword: string;
  @ApiProperty() hashedRT: string | null;

  @ApiProperty() isEmailVerified: boolean;
  @ApiProperty() isLDAPUser: boolean;
  @ApiProperty() isDisabled: boolean;

  @ApiProperty() isDeleted: boolean;
  @ApiProperty() profile?: ProfileEntity;
  userCreated: string;
  userModified: string;
  dtCreated: Date;
  dtModified: Date;
}
