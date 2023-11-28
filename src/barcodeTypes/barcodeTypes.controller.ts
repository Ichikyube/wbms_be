import {
  Body,
  Get,
  Param,
  Post,
  Controller,
  Patch,
  Delete,
  Req,
  ForbiddenException,
} from '@nestjs/common';
import { Request } from 'express';
import { BarcodeTypesService } from './barcodeTypes.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ac } from 'src/settings/rbac.config';

@ApiBearerAuth('access-token')
@Controller('barcodetypes')
export class BarcodeTypesController {
  constructor(private customerTypesService: BarcodeTypesService) {}

  @Get('')
  getAll(@Req() req: Request) {
    const permission = ac.can(req.user['role']).readAny('BarcodeType');
    if (!permission.granted) {
        throw new ForbiddenException('You do not have enough permissions');
    }
    return this.customerTypesService.getAll();
  }

  @Post('search-many')
  searchMany(@Body() query: any, @Req() req: Request) {
    const permission = ac.can(req.user['role']).readAny('BarcodeType');
    if (!permission.granted) {
        throw new ForbiddenException('You do not have enough permissions');
    }
    return this.customerTypesService.searchMany(query);
  }

  @Post('search-first')
  searchFirst(@Body() query: any, @Req() req: Request) {
    const permission = ac.can(req.user['role']).readAny('BarcodeType');
    if (!permission.granted) {
        throw new ForbiddenException('You do not have enough permissions');
    }
    return this.customerTypesService.searchFirst(query);
  }

  @Get(':id')
  getById(@Param('id') id: string, @Req() req: Request) {
    const permission = ac.can(req.user['role']).readAny('BarcodeType');
    if (!permission.granted) {
        throw new ForbiddenException('You do not have enough permissions');
    }
    return this.customerTypesService.getById(id);
  }

  @Post()
  create(@Body() dto: any, @Req() req: Request) {
    const permission = ac.can(req.user['role']).readAny('BarcodeType');
    if (!permission.granted) {
        throw new ForbiddenException('You do not have enough permissions');
    }
    return this.customerTypesService.create(dto);
  }

  @Patch(':id')
  updateById(@Param('id') id: string, @Body() dto: any, @Req() req: Request) {
    const permission = ac.can(req.user['role']).readAny('BarcodeType');
    if (!permission.granted) {
        throw new ForbiddenException('You do not have enough permissions');
    }
    return this.customerTypesService.updateById(id, dto);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string, @Req() req: Request) {
    const permission = ac.can(req.user['role']).readAny('BarcodeType');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    return this.customerTypesService.deleteById(id);
  }
}
