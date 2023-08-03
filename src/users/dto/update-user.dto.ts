import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './';
import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
