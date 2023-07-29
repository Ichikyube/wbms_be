import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CreatePermissionDto } from 'src/accessControl/roles/dto/create-permission.dto';

export class CreateRoleDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  name: string;

  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => CreatePermissionDto)
  readonly rolePermission?: CreatePermissionDto[];
}
