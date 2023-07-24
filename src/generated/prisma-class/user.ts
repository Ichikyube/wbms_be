import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class User {
  @ApiProperty({ type: String })
  id: string = undefined;

  @ApiProperty({ type: String })
  username: string = undefined;

  @ApiProperty({ type: String })
  email: string = undefined;

  @ApiProperty({ type: String })
  nik: string = undefined;

  @ApiProperty({ type: String })
  name: string = undefined;

  @ApiPropertyOptional({ type: String })
  phone?: string = undefined;

  @ApiProperty({ type: String })
  address: string = undefined;

  @ApiProperty({ type: Date })
  birthDate: Date = undefined;

  @ApiProperty({ type: String })
  division: string = undefined;

  @ApiProperty({ type: String })
  position: string = undefined;

  @ApiProperty({ type: String })
  profilePic: string = undefined;

  @ApiProperty({ type: String })
  fileLocation: string = undefined;

  @ApiProperty({ type: Number })
  roleId: number = undefined;

  @ApiProperty({ type: String })
  role: string = undefined;

  @ApiProperty({ type: String })
  hashedPassword: string = undefined;

  @ApiPropertyOptional({ type: String })
  hashedRT?: string = undefined;

  @ApiProperty({ type: Boolean })
  isEmailVerified: boolean = undefined;

  @ApiProperty({ type: Boolean })
  isLDAPUser: boolean = true;

  @ApiProperty({ type: Boolean })
  isDisabled: boolean = undefined;

  @ApiProperty({ type: Boolean })
  isDeleted: boolean = undefined;

  @ApiPropertyOptional({ type: String })
  userCreated?: string = undefined;

  @ApiPropertyOptional({ type: String })
  userModified?: string = undefined;

  @ApiProperty({ type: Date })
  dtCreated: Date = undefined;

  @ApiProperty({ type: Date })
  dtModified: Date = undefined;
}
