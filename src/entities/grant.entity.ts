import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum action {
  Read = 'read',
  Write = 'write',
  Update = 'update',
  Delete = 'delete',
}

export enum possession {
  OWN = 'OWN',
  ANY = 'ANY',
}
export class GrantEntity {
  @IsNotEmpty()
  @IsEnum(action)
  @IsString()
  @ApiProperty({ enum: action, enumName: 'Action' }) //
  action: string;

  @IsNotEmpty()
  @IsEnum(possession)
  @IsString()
  @ApiProperty({ enum: possession, enumName: 'Possession' }) //
  possesion: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  attributes: string;
}
