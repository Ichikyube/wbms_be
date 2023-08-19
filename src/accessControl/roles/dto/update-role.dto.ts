import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRoleDto } from './create-role.dto';
import {
  ArrayNotEmpty,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { PermissionEntity } from 'src/entities/permission.entity';
export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  name: string;

  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  readonly permissions?: PermissionEntity[];
}
