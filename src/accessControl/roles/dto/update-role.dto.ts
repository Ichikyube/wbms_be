import { ApiProperty, PartialType } from "@nestjs/swagger";
import { PermissionEntity } from "src/entities/permission.entity";
import { CreateUserDto } from "src/users/dto";


export class UpdateRoleDto extends PartialType(CreateUserDto) {
    @ApiProperty({ type: Number })
    id: number;

    name?: string;
    permissions?: PermissionEntity[];
}

