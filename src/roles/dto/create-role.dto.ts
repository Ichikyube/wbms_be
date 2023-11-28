import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CreatePermissionDto } from './create-permission.dto';
export class CreateRoleDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  name: string;
  @IsString()
  @ApiProperty({ type: String })
  description: string;

  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  readonly permissions?: CreatePermissionDto[];
}
