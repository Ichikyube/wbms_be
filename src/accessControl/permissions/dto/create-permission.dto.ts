import { Prisma } from '@prisma/client';
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

export class CreatePermissionDto {
  @IsNotEmpty()
  // @IsEnum(action)
  @IsString()
  @ApiProperty() //{ enum: action }
  action: action;

  @IsNotEmpty()
  // @IsEnum(possession)
  @IsString()
  @ApiProperty()
  possesion: possession;
  @IsNotEmpty()
  @IsString()
  attributes: string;
}
// export const action = {
//         MONDAY: 'Monday',
//         TUESDAY: 'Tuesday',
//         WEDNESDAY: 'Wednesday',
//         THURSDAY: 'Thursday',
//         FRIDAY: 'Friday',
//         SATURDAY: 'Saturday',
//         SUNDAY: 'Sunday'
// } as const;
