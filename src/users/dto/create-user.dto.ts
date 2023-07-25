import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty() @IsString() @IsNotEmpty() username: string = 'Jhonny';
  @ApiProperty() @IsEmail() @IsNotEmpty() email: string = 'jhon@gmail.com';

  @ApiProperty() @IsString() @IsNotEmpty() nik: string = 'string';

  @ApiProperty()
  @IsNotEmpty()
  @Length(8, 20, {
    message: 'Panjang password minimal 8 karakter dan maksimal 20 karakter.',
  })
  password: string = '12345678';

  @ApiProperty() @IsString() @IsNotEmpty() name: string = 'Bambang Tri';

  @ApiProperty({
    type: 'string',
    format: 'binary',
  })
  @IsString()
  profilePic?: Express.Multer.File;

  @ApiProperty()
  @IsString()
  division?: string;

  @ApiProperty()
  @IsString()
  position?: string;

  @ApiProperty({ required: false })
  // @IsPhoneNumber('IN')
  phone?: string;

  @ApiProperty({ type: String })
  @IsString()
  address?: string;

  @ApiProperty({
    type: 'date',
    format: 'date',
    pattern: 'YYYY-MM-DD',
    example: '1995-07-01',
  })
  birthDate?: Date;

  // @IsEnum(UserRole)
  @ApiProperty({ type: Number })
  roleId?: number;

  @ApiProperty({ type: String })
  role: string = 'staff';

  @ApiProperty({ type: Boolean })
  isLDAPUser: boolean;
}
