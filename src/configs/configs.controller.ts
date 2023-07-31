import {
  Body,
  Get,
  Param,
  Post,
  Controller,
  Patch,
  Delete,
} from '@nestjs/common';
import { ConfigsService } from './configs.service';
import { UseRoles } from 'nest-access-control';
import { BaseRole } from 'src/accessControl/roles/types/roles.type';

// @UseRoles(Role.ADMIN)
@Controller('configs')
export class ConfigsController {
  constructor(private configsService: ConfigsService) {}

  @Get('')
  @UseRoles({
    resource: 'configsData',
    action: 'delete',
    possession: 'own',
  })
  getAll() {
    return this.configsService.getAll();
  }

  @Get('env')
  @UseRoles({
    resource: 'configsData',
    action: 'read',
    possession: 'own',
  })
  getEnv() {
    return this.configsService.getEnv();
  }

  @Post('search-many')
  @UseRoles({
    resource: 'configsData',
    action: 'read',
    possession: 'own',
  })
  searchMany(@Body() query: any) {
    return this.configsService.searchMany(query);
  }

  @Post('search-first')
  @UseRoles({
    resource: 'config',
    action: 'read',
    possession: 'own',
  })
  searchFirst(@Body() query: any) {
    return this.configsService.searchFirst(query);
  }

  @Get(':id')
  @UseRoles({
    resource: 'config',
    action: 'read',
    possession: 'own',
  })
  getById(@Param('id') id: string) {
    return this.configsService.getById(id);
  }

  @Post()
  @UseRoles({
    resource: 'config',
    action: 'create',
    possession: 'own',
  })
  create(@Body() dto: any) {
    return this.configsService.create(dto);
  }

  @Patch(':id')
  @UseRoles({
    resource: 'config',
    action: 'update',
    possession: 'own',
  })
  updateById(@Param('id') id: string, @Body() dto: any) {
    return this.configsService.updateById(id, dto);
  }

  @Delete(':id')
  @UseRoles({
    resource: 'config',
    action: 'delete',
    possession: 'own',
  })
  deleteById(@Param('id') id: string) {
    return this.configsService.deleteById(id);
  }
}
