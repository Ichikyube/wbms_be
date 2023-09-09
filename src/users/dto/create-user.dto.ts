import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  ValidateNested,
  isNotEmpty,
  isNumber,
} from 'class-validator';
import * as moment from 'moment';

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
  @IsNumber()
  readonly roleId: number;

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
    type: String,
    format: 'date',
    example: '09/08/2023', // This is the input
    description: 'The user date of birth',
  })  
  @IsOptional()
  doB?: Date;
  

  @ApiProperty({ required: false }) @IsString() @IsOptional() alamat?: string;


  @ApiProperty({ type: String })
  @IsBoolean()
  @Transform(({ obj, key }) => {
    return obj[key] === 'true' ? true : obj[key] === 'false' ? false : obj[key];
  })
  isLDAPUser: boolean;
}
