import { ApiProperty, PartialType } from "@nestjs/swagger";
import { RolePermissionEntity } from "src/entities/role-permission.entity";
import { CreateUserDto } from "src/users/dto";


export class UpdateRoleDto extends PartialType(CreateUserDto) {
    @ApiProperty({ type: Number })
    id: number;

    name?: string;
    permissions?: RolePermissionEntity[];
}

