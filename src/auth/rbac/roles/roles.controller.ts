import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AtGuard } from 'src/common/guards';
import { RolesService } from './roles.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleEntity } from 'src/entities/roles.entity';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  @ApiCreatedResponse({ type: RoleEntity })
  getAllRoles() {
    return this.rolesService.findAllRoles();
  }

  @Get(':id')
  getRoleById(@Param() { id }) {
    return this.rolesService.findRoleById(id);
  }

  @Post()
  @ApiCreatedResponse({ type: RoleEntity })
  async createRole(@Body() role: CreateRoleDto) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        role: null,
      },
      logs: {},
    };

    try {
      const userId = ''; //req.user['id'];
      const record = await this.rolesService.createRole(role);

      dataOut.data.role = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: role, error };
    }

    return dataOut;
  }

  @Patch(':id')
  async updateRole(@Param() { id }, @Body() params) {
    return this.rolesService.updateRole(id, params);
  }

  @Delete(':id')
  async deleteRole(@Param() { id }) {
    return this.rolesService.deleteRole(id);
  }
}
