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
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { DriverService } from './driver.service';
import { CreateDriverDto, UpdateDriverDto } from './dto';
import { UseRoles } from 'nest-access-control';
import { DriverEntity } from 'src/entities';

@ApiTags('Drivers')
@ApiBearerAuth('access-token')
@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Get('')
  @UseRoles({
    resource: 'driverData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: DriverEntity, isArray: true })
  async getAll() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        driver: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.driverService.getAll();

      dataOut.data.driver.records = records;
      dataOut.data.driver.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get('attr')
  @UseRoles({
    resource: 'citiesData',
    action: 'read',
    possession: 'own',
  })
  async getAttributes() {
    return await this.driverService.getAttributes();
  }

  @Get('deleted')
  @UseRoles({
    resource: 'driverData',
    action: 'delete',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: DriverEntity, isArray: true })
  async getAllDeleted() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        driver: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.driverService.getAllDeleted();

      dataOut.data.driver.records = records;
      dataOut.data.driver.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get(':id')
  @UseRoles({
    resource: 'driverData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: DriverEntity })
  async getById(@Param('id') id: string) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        driver: null,
      },
      logs: {},
    };

    try {
      const record = await this.driverService.getById(id);

      dataOut.data.driver = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }

  @Post('search-first')
  @UseRoles({
    resource: 'driverData',
    action: 'create',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: DriverEntity })
  async searchFirst(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        driver: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const record = await this.driverService.searchFirst(query);

      if (record) {
        dataOut.data.driver.records.push(record);
        dataOut.data.driver.totalRecords = 1;
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
    resource: 'driverData',
    action: 'create',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: DriverEntity, isArray: true })
  async searchMany(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        driver: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.driverService.searchMany(query);

      dataOut.data.driver.records = records;
      dataOut.data.driver.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-first-deleted')
  @UseRoles({
    resource: 'driverData',
    action: 'create',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: DriverEntity })
  async searchFirstDeleted(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        driver: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const record = await this.driverService.searchFirstDeleted(query);

      if (record) {
        dataOut.data.driver.records.push(record);
        dataOut.data.driver.totalRecords = 1;
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
    resource: 'driverData',
    action: 'create',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: DriverEntity, isArray: true })
  async searchManyDeleted(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        driver: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.driverService.searchManyDeleted(query);

      dataOut.data.driver.records = records;
      dataOut.data.driver.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post()
  @UseRoles({
    resource: 'driver',
    action: 'create',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: DriverEntity })
  async create(@Body() dto: CreateDriverDto, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        driver: null,
      },
      logs: {},
    };

    try {
      const userId = req.user['sub'];
      const record = await this.driverService.create(dto, userId);

      dataOut.data.driver = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Patch(':id')
  @UseRoles({
    resource: 'driverData',
    action: 'update',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: DriverEntity })
  async updateById(
    @Param('id') id: string,
    @Body() dto: UpdateDriverDto,
    @Req() req: Request,
  ) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        driver: null,
      },
      logs: {},
    };

    try {
      const userId = req.user['sub'];
      const record = await this.driverService.updateById(id, dto, userId);

      dataOut.data.driver = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Delete(':id')
  @UseRoles({
    resource: 'driverData',
    action: 'delete',
    possession: 'own',
  })
  async deleteById(@Param('id') id: string, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        driver: null,
      },
      logs: {},
    };

    try {
      const userId = ''; // req.user['sub']
      const record = await this.driverService.deleteById(id, userId);

      dataOut.data.driver = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }
}
