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
    possession: 'any',
  })
  getAll() {
    return this.customerTypesService.getAll();
  }

  @Post('search-many')
  @UseRoles({
    resource: 'barcodeData',
    action: 'read',
    possession: 'any',
  })
  searchMany(@Body() query: any) {
    return this.customerTypesService.searchMany(query);
  }

  @Post('search-first')
  @UseRoles({
    resource: 'barcodeData',
    action: 'read',
    possession: 'any',
  })
  searchFirst(@Body() query: any) {
    return this.customerTypesService.searchFirst(query);
  }

  @Get(':id')
  @UseRoles({
    resource: 'barcode',
    action: 'read',
    possession: 'any',
  })
  getById(@Param('id') id: string) {
    return this.customerTypesService.getById(id);
  }

  @Post()
  @UseRoles({
    resource: 'barcode',
    action: 'create',
    possession: 'any',
  })
  create(@Body() dto: any) {
    return this.customerTypesService.create(dto);
  }

  @Patch(':id')
  @UseRoles({
    resource: 'barcode',
    action: 'update',
    possession: 'any',
  })
  updateById(@Param('id') id: string, @Body() dto: any) {
    return this.customerTypesService.updateById(id, dto);
  }

  @Delete(':id')
  @UseRoles({
    resource: 'barcode',
    action: 'delete',
    possession: 'any',
  })
  deleteById(@Param('id') id: string) {
    return this.customerTypesService.deleteById(id);
  }
}
