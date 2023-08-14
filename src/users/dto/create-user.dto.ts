import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';
import { RoleEntity } from 'src/entities/roles.entity';

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

  @ApiProperty() @IsString() @IsNotEmpty() name: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
  })
  file: Express.Multer.File;

  @ApiProperty()
  @IsString()
  @IsOptional()
  division?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  position?: string;

  @ApiProperty({ required: false })
  // @IsPhoneNumber('IN')
  @IsOptional()
  phone?: string;

  // @IsEnum(UserRole)
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  readonly roleId: number;

  @ApiProperty({ type: Boolean }) @IsBoolean() isLDAPUser: boolean;
}
