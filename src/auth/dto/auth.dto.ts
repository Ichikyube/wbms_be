import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  Length,
  IsOptional,
} from 'class-validator';
import { CreateUserDto } from 'src/users/dto';

export class SignupDto extends CreateUserDto {}

export class SigninDto {
  @ApiPropertyOptional({
    description: 'Username anda',
    example: 'admin01@kpbookstore.kp',
  })
  @IsString()
  @IsOptional()
  username: string;
  @ApiPropertyOptional({
    description: 'Email anda',
    example: 'admin01@dsn.id',
  })
  @IsEmail()
  @IsOptional()
  email: string;
  @ApiPropertyOptional({
    description: 'Nomor Induk Kepegawaian anda',
    example: '2021010024001',
  })
  @IsString()
  @IsOptional()
  nik: string;

  @ApiProperty({ description: 'Masukan password', example: '12345678' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
