import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  ValidateNested,
  isNotEmpty,
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
  
  // @IsEnum(UserRole)
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly roleId: string;


  @ApiProperty() @IsString() @IsNotEmpty() name: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
  })
  file?: Express.Multer.File;

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

  @ApiProperty({
    required: false,
    example: '2022-01-01',
    description: 'The user date of birth',
    type: 'string',
    format: 'date',
  }) @IsOptional() doB?: Date;

  @ApiProperty({ required: false }) @IsString() @IsOptional() alamat?: string;
  
  @Transform(({ value }) => value === 'true')
  @ApiProperty({ type: Boolean }) 
  @IsBoolean() isLDAPUser: boolean;
}
