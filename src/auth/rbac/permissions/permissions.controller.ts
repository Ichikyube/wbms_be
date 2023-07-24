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
import { Permission, Prisma } from '@prisma/client';

@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  // @Post()
  // async createPermission(
  //   @Body() data: Prisma.PermissionCreateInput,
  // ): Promise<Permission> {
  //   return this.permissionsService.createPermission(data);
  // }

  @Get(':id')
  async findPermissionById(
    @Param('id') id: number,
  ): Promise<Permission | null> {
    return this.permissionsService.findPermissionById(id);
  }

  @Put(':id')
  async updatePermission(
    @Param('id') id: number,
    @Body() data: any,
  ): Promise<Permission> {
    return this.permissionsService.updatePermission(id, data);
  }

  @Delete(':id')
  async deletePermission(@Param('id') id: number): Promise<Permission> {
    return this.permissionsService.deletePermission(id);
  }

  @Get()
  async findAllPermissions(): Promise<Permission[]> {
    return this.permissionsService.findAllPermissions();
  }
}
