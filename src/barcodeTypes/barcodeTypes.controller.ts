import {
  Body,
  Get,
  Param,
  Post,
  Controller,
  Patch,
  Delete,
} from '@nestjs/common';
import { BarcodeTypesService } from './barcodeTypes.service';
import { UseRoles } from 'nest-access-control';

@Controller('barcodetypes')
export class BarcodeTypesController {
  constructor(private customerTypesService: BarcodeTypesService) {}

  @Get('')
  @UseRoles({
    resource: 'barcodeData',
    action: 'read',
    possession: 'own',
  })
  getAll() {
    return this.customerTypesService.getAll();
  }

  @Get('attr')
  @UseRoles({
    resource: 'barcodeData',
    action: 'read',
    possession: 'own',
  })
  async getAttributes() {
    return await this.customerTypesService.getAttributes();
  }

  @Post('search-many')
  @UseRoles({
    resource: 'barcodeData',
    action: 'read',
    possession: 'own',
  })
  searchMany(@Body() query: any) {
    return this.customerTypesService.searchMany(query);
  }

  @Post('search-first')
  @UseRoles({
    resource: 'barcodeData',
    action: 'read',
    possession: 'own',
  })
  searchFirst(@Body() query: any) {
    return this.customerTypesService.searchFirst(query);
  }

  @Get(':id')
  @UseRoles({
    resource: 'barcodeData',
    action: 'read',
    possession: 'own',
  })
  getById(@Param('id') id: string) {
    return this.customerTypesService.getById(id);
  }

  @Post()
  @UseRoles({
    resource: 'barcodeData',
    action: 'create',
    possession: 'own',
  })
  create(@Body() dto: any) {
    return this.customerTypesService.create(dto);
  }

  @Patch(':id')
  @UseRoles({
    resource: 'barcodeData',
    action: 'update',
    possession: 'own',
  })
  updateById(@Param('id') id: string, @Body() dto: any) {
    return this.customerTypesService.updateById(id, dto);
  }

  @Delete(':id')
  @UseRoles({
    resource: 'barcodeData',
    action: 'delete',
    possession: 'own',
  })
  deleteById(@Param('id') id: string) {
    return this.customerTypesService.deleteById(id);
  }
}
