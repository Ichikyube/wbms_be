import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { RolesService } from './roles.service';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleEntity } from 'src/entities/roles.entity';
import { UpdateRoleDto } from './dto/update-role.dto';

@ApiTags('Roles')
@ApiBearerAuth()
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  @ApiCreatedResponse({ type: RoleEntity })
  getAllRoles() {
    return this.rolesService.getRoles();
  }

  @Get(':id')
  getRoleById(@Param() { id }) {
    return this.rolesService.findRoleById(id);
  }

  @Post()
  @ApiCreatedResponse({ type: RoleEntity })
  async createRole(@Body(new ValidationPipe()) dto: CreateRoleDto, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        role: null,
      },
      logs: {},
    };

    try {
      const userId = req.user['sub'];
      const record = await this.rolesService.createRole(dto, userId);

      dataOut.data.role = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Patch(':id')
  @ApiCreatedResponse()
  async updateRole(
    @Param() { id },
    @Body(new ValidationPipe()) params: UpdateRoleDto,
    @Req() req: Request
  ) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        role: null,
      },
      logs: {},
    };

    try {
      const userId = req.user['sub'];
      const record = await this.rolesService.updateRole(userId, id, params);

      dataOut.data.role = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: params, error };
    }

    return dataOut;
  }

  @Delete(':id')
  async deleteRole(@Param() { id }) {
    return this.rolesService.deleteRole(id);
  }
}
