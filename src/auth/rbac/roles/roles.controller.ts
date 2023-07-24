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
import { DbService } from 'src/db/db.service';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  // @Get()
  // getAllRoles() {
  //   return this.rolesService.getAllRoles();
  // }

  // @Get(':id')
  // getRolesById(@Param() { id }) {
  //   return this.rolesService.getProductById(id);
  // }

  // @Post()
  // @UseGuards(AtGuard)
  // async createProduct(@Body() role) {
  //   return this.rolesService.createRole(role);
  // }

  // @Patch(':id')
  // async updateProduct(@Param() { id }, @Body() params) {
  //   return this.rolesService.updateRole(id, params);
  // }

  // @Delete(':id')
  // async deleteProduct(@Param() { id }) {
  //   return this.rolesService.deleteRole(id);
  // }
}
