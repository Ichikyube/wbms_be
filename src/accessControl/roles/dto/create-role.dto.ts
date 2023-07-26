import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CreateRolePermissionDto } from 'src/generated/nestjs-dto/create-rolePermission.dto';

export class CreateRoleDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  name: string;

  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  readonly rolePermission?: CreateRolePermissionDto[];
}
