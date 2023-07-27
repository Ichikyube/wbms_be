import {
  IsNotEmpty,
  IsString,
  ValidateNested,
  ArrayNotEmpty,
} from 'class-validator';
import { CreatePermissionDto } from 'src/accessControl/permissions/dto/create-permission.dto';

export class CreateRolePermissionDto {
  @IsNotEmpty()
  @IsString()
  readonly resource: string;

  @ValidateNested()
  readonly permissions: CreatePermissionDto[];
}
