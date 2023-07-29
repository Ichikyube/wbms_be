import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

enum action {
  onlyRead = 'onlyRead',
  Full = 'Full',
}

export enum possession {
  OWN = 'OWN',
  ANY = 'ANY',
}

export class CreateGrantDto {
  @IsNotEmpty()
  @IsString()
  action: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  possesion: string;
  @IsNotEmpty()
  @IsString()
  attributes: string;
}