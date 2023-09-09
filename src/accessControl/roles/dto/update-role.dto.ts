import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRoleDto } from './create-role.dto';
import {
  ArrayNotEmpty,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreatePermissionDto } from './create-permission.dto';
export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  // @IsNotEmpty()
  // @IsString()
  // @ApiProperty({ type: String })
  // name: string;
  // @IsString()
  // @ApiProperty({ type: String })
  // description: string;
  // @ValidateNested({ each: true })
  // @ArrayNotEmpty()
  // readonly permissions?: CreatePermissionDto[];
}