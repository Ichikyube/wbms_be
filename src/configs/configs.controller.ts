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

@Controller('configs')
export class ConfigsController {
  constructor(private configsService: ConfigsService) {}

  @Get('')
  @UseRoles({
    resource: 'configsData',
    action: 'delete',
    possession: 'any',
  })
  getAll() {
    return this.configsService.getAll();
  }

  @Get('env')
  @UseRoles({
    resource: 'configsData',
    action: 'read',
    possession: 'any',
  })
  getEnv() {
    return this.configsService.getEnv();
  }

  @Post('search-many')
  @UseRoles({
    resource: 'configsData',
    action: 'read',
    possession: 'any',
  })
  searchMany(@Body() query: any) {
    return this.configsService.searchMany(query);
  }

  @Post('search-first')
  @UseRoles({
    resource: 'config',
    action: 'read',
    possession: 'any',
  })
  searchFirst(@Body() query: any) {
    return this.configsService.searchFirst(query);
  }

  @Get(':id')
  @UseRoles({
    resource: 'config',
    action: 'read',
    possession: 'any',
  })
  getById(@Param('id') id: string) {
    return this.configsService.getById(id);
  }

  @Post()
  @UseRoles({
    resource: 'config',
    action: 'create',
    possession: 'any',
  })
  create(@Body() dto: any) {
    return this.configsService.create(dto);
  }

  @Patch(':id')
  @UseRoles({
    resource: 'config',
    action: 'update',
    possession: 'any',
  })
  updateById(@Param('id') id: string, @Body() dto: any) {
    return this.configsService.updateById(id, dto);
  }

  @Delete(':id')
  @UseRoles({
    resource: 'config',
    action: 'delete',
    possession: 'any',
  })
  deleteById(@Param('id') id: string) {
    return this.configsService.deleteById(id);
  }
}
