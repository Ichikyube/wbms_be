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
  @ApiPropertyOptional() @IsString() @IsOptional() username: string;
  @ApiPropertyOptional() @IsEmail() @IsOptional() email: string;
  @ApiPropertyOptional() @IsString() @IsOptional() nik: string;

  @ApiProperty() @IsString() @IsNotEmpty() password: string;
}
