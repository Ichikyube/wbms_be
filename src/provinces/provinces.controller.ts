import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { ProvincesService } from './provinces.service';
import { CreateProvinceDto, UpdateProvinceDto } from './dto';
import { SaveUserIdGuard } from 'src/common/guards/SaveUserIdGuard ';
import { Roles } from 'src/common/decorators';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { UseRoles } from 'nest-access-control';
import { ProvinceEntity } from 'src/entities';

@ApiTags('Provinces')
@Controller('provinces')
export class ProvincesController {
  constructor(private readonly provincesService: ProvincesService) {}

  // @Roles(UserRole.Administrator)
  // @UseGuards(RolesGuard)
  @Get('')
  @UseRoles({
    resource: 'provincesData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: ProvinceEntity, isArray: true })
  async getAll() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        province: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.provincesService.getAll();

      dataOut.data.province.records = records;
      dataOut.data.province.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get('deleted')
  @UseRoles({
    resource: 'provincesData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: ProvinceEntity, isArray: true })
  async getAllDeleted() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        province: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.provincesService.getAllDeleted();

      dataOut.data.province.records = records;
      dataOut.data.province.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get(':id')
  @UseRoles({
    resource: 'province',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: ProvinceEntity })
  async getById(@Param('id') id: string) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        province: null,
      },
      logs: {},
    };

    try {
      const record = await this.provincesService.getById(id);

      dataOut.data.province = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }

  @Post('search-first')
  @UseRoles({
    resource: 'provincesData',
    action: 'create',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: ProvinceEntity })
  async searchFirst(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        province: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const record = await this.provincesService.searchFirst(query);

      if (record) {
        dataOut.data.province.records.push(record);
        dataOut.data.province.totalRecords = 1;
      }
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-many')
  @UseRoles({
    resource: 'provincesData',
    action: 'create',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: ProvinceEntity, isArray: true })
  async searchMany(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        province: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.provincesService.searchMany(query);

      dataOut.data.province.records = records;
      dataOut.data.province.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-first-deleted')
  @UseRoles({
    resource: 'province',
    action: 'create',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: ProvinceEntity })
  async searchFirstDeleted(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        province: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const record = await this.provincesService.searchFirstDeleted(query);

      if (record) {
        dataOut.data.province.records.push(record);
        dataOut.data.province.totalRecords = 1;
      }
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-many-deleted')
  @UseRoles({
    resource: 'provincesData',
    action: 'create',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: ProvinceEntity, isArray: true })
  async searchManyDeleted(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        province: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.provincesService.searchManyDeleted(query);

      dataOut.data.province.records = records;
      dataOut.data.province.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post()
  @UseRoles({
    resource: 'province',
    action: 'create',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: ProvinceEntity })
  async create(@Body() dto: CreateProvinceDto, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        province: null,
      },
      logs: {},
    };

    try {
      // const userId = req.user['id'];
      const userId = '';
      const record = await this.provincesService.create(dto, userId);

      dataOut.data.province = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Patch(':id')
  @UseRoles({
    resource: 'province',
    action: 'update',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: ProvinceEntity })
  async updateById(
    @Param('id') id: string,
    @Body() dto: UpdateProvinceDto,
    @Req() req: Request,
  ) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        province: null,
      },
      logs: {},
    };

    try {
      const userId = ''; //req.user['id'];
      console.log(id);
      const record = await this.provincesService.updateById(id, dto, userId);

      dataOut.data.province = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Delete(':id')
  @UseRoles({
    resource: 'province',
    action: 'delete',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: ProvinceEntity })
  async deleteById(@Param('id') id: string, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        province: null,
      },
      logs: {},
    };

    try {
      const userId = ''; // req.user['id'];
      const record = await this.provincesService.deleteById(id, userId);

      dataOut.data.province = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }
}
