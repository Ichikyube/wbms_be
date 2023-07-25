import {
  Body,
  Get,
  Param,
  Post,
  Controller,
  Patch,
  Delete,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { CitiesService } from './cities.service';
import { CreateCityDto, UpdateCityDto } from './dto';
import { CityEntity } from './entities';
import { UseRoles } from 'nest-access-control';

@ApiTags('Cities')
@Controller('cities')
export class CitiesController {
  constructor(private citiesService: CitiesService) {}

  @Get('')
  @UseRoles({
    resource: 'citiesData',
    action: 'read',
    possession: 'any',
  })
  @ApiCreatedResponse({ type: CityEntity, isArray: true })
  async getAll() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        city: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.citiesService.getAll();

      dataOut.data.city.records = records;
      dataOut.data.city.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get('deleted')
  @UseRoles({
    resource: 'citiesData',
    action: 'delete',
    possession: 'any',
  })
  @ApiCreatedResponse({ type: CityEntity, isArray: true })
  async getAllDeleted() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        city: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.citiesService.getAllDeleted();

      dataOut.data.city.records = records;
      dataOut.data.city.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get(':id')
  @UseRoles({
    resource: 'city',
    action: 'read',
    possession: 'any',
  })
  @ApiCreatedResponse({ type: CityEntity })
  async getById(@Param('id') id: string) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        city: null,
      },
      logs: {},
    };

    try {
      const record = await this.citiesService.getById(id);

      dataOut.data.city = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }

  @Post('search-first')
  @UseRoles({
    resource: 'citiesData',
    action: 'read',
    possession: 'any',
  })
  @ApiCreatedResponse({ type: CityEntity })
  async searchFirst(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        city: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const record = await this.citiesService.searchFirst(query);

      if (record) {
        dataOut.data.city.records.push(record);
        dataOut.data.city.totalRecords = 1;
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
    resource: 'citiesData',
    action: 'read',
    possession: 'any',
  })
  @ApiCreatedResponse({ type: CityEntity, isArray: true })
  async searchMany(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        city: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.citiesService.searchMany(query);

      dataOut.data.city.records = records;
      dataOut.data.city.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-first-deleted')
  @UseRoles({
    resource: 'citiesData',
    action: 'read',
    possession: 'any',
  })
  @ApiCreatedResponse({ type: CityEntity })
  async searchFirstDeleted(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        city: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const record = await this.citiesService.searchFirstDeleted(query);

      if (record) {
        dataOut.data.city.records.push(record);
        dataOut.data.city.totalRecords = 1;
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
    resource: 'employeeData',
    action: 'read',
    possession: 'any',
  })
  @ApiCreatedResponse({ type: CityEntity, isArray: true })
  async searchManyDeleted(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        city: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.citiesService.searchManyDeleted(query);

      dataOut.data.city.records = records;
      dataOut.data.city.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post()
  @UseRoles({
    resource: 'city',
    action: 'read',
    possession: 'any',
  })
  @ApiCreatedResponse({ type: CityEntity })
  async create(@Body() dto: CreateCityDto, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        city: null,
      },
      logs: {},
    };

    try {
      const userId = ''; //req.user['id'];
      const record = await this.citiesService.create(dto, userId);

      dataOut.data.city = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Patch(':id')
  @UseRoles({
    resource: 'city',
    action: 'read',
    possession: 'any',
  })
  @ApiCreatedResponse({ type: CityEntity })
  async updateById(
    @Param('id') id: string,
    @Body() dto: UpdateCityDto,
    @Req() req: Request,
  ) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        city: null,
      },
      logs: {},
    };

    try {
      const userId = ''; //req.user['id'];
      const record = await this.citiesService.updateById(id, dto, userId);

      dataOut.data.city = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Delete(':id')
  @UseRoles({
    resource: 'city',
    action: 'read',
    possession: 'any',
  })
  @ApiCreatedResponse({ type: CityEntity })
  async deleteById(@Param('id') id: string, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        city: null,
      },
      logs: {},
    };

    try {
      const userId = ''; //req.user['id'];
      const record = await this.citiesService.deleteById(id, userId);

      dataOut.data.city = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }
}
