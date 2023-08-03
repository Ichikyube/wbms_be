import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './';
import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {

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
  file: Express.Multer.File;

  @ApiProperty()
  @IsString()
  division?: string;

  @ApiProperty()
  @IsString()
  position?: string;

  @ApiProperty({ required: false })
  // @IsPhoneNumber('IN')
  phone?: string;

  // @IsEnum(UserRole)
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  readonly roleId: number

  @ApiProperty({ type: Boolean }) @IsBoolean() isLDAPUser: boolean;
}
