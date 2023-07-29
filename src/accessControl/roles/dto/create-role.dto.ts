import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { PermissionEntity } from 'src/entities/permission.entity';

export class CreateRoleDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  name: string;

  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => PermissionEntity)
  readonly rolePermission?: PermissionEntity[];
}
