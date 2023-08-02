import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { RoleEntity } from './roles.entity';

export class UserEntity implements User {
  @ApiProperty() id: string;

  @ApiProperty() username: string;
  @ApiProperty() email: string;
  @ApiProperty() nik: string;

  @ApiProperty() roleId: number;
  @ApiProperty() role: string;

  @ApiProperty() profilePic: string;

  @ApiProperty() name: string;
  @ApiProperty() division: string;
  @ApiProperty() position: string;
  @ApiProperty() phone: string;

  @ApiProperty() hashedPassword: string;
  @ApiProperty() hashedRT: string | null;

  @ApiProperty() isEmailVerified: boolean;
  @ApiProperty() isLDAPUser: boolean;
  @ApiProperty() isDisabled: boolean;

  @ApiProperty() isDeleted: boolean;

  userCreated: string;
  userModified: string;
  dtCreated: Date;
  dtModified: Date;
}
