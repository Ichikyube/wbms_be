import { IsNotEmpty, IsString, ValidateNested, ArrayNotEmpty } from 'class-validator';
import { CreatePermissionDto } from 'src/generated/nestjs-dto/create-permission.dto';

export class CreateRolePermissionDto {
    @IsNotEmpty()
    @IsString()
    readonly resourceId: string;
  
    @ValidateNested()
    readonly permissions: CreatePermissionDto[];
    userCreated: string;
    userModified: string;
}
