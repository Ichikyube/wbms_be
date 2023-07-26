import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionEntity } from 'src/entities/permission.entity';
import { CreatePermissionDto } from './dto/create-permission.dto';

@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Post()
  async createPermission(
    @Body() data: CreatePermissionDto,
  ): Promise<PermissionEntity> {
    return this.permissionsService.createPermission(data);
  }

  @Get(':id')
  async findPermissionById(
    @Param('id') id: string,
  ): Promise<PermissionEntity | null> {
    return this.permissionsService.findPermissionById(id);
  }

  @Put(':id')
  async updatePermission(
    @Param('id') id: string,
    @Body() data: any,
  ): Promise<PermissionEntity> {
    return this.permissionsService.updatePermission(id, data);
  }

  @Delete(':id')
  async deletePermission(@Param('id') id: string): Promise<PermissionEntity> {
    return this.permissionsService.deletePermission(id);
  }

  @Get()
  async findAllPermissions(): Promise<PermissionEntity[]> {
    return this.permissionsService.findAllPermissions();
  }
}
