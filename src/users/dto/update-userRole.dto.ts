import { Role } from '@prisma/client';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class UpdateUserRoleDto {
  // @IsEnum(UserRole)
  @IsNotEmpty()
  newRole: Role;
}
