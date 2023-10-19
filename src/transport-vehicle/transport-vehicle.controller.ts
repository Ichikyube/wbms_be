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
import { CacheInterceptor } from '@nestjs/cache-manager';
import { Request } from 'express';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { TransportVehicleService } from './transport-vehicle.service';
import { CreateTransportVehicleDto, UpdateTransportVehicleDto } from './dto';
import { UseRoles } from 'nest-access-control';
import { TransportVehicleEntity } from 'src/entities';

@ApiTags('Transport Vehicles')
@ApiBearerAuth('access-token')
@Controller('transport-vehicle')
export class TransportVehicleController {
  constructor(
    private readonly transportVehicleService: TransportVehicleService,
  ) {}

  @Get('sync-with-semai')
  async syncWithSemai() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        transportVehicle: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.transportVehicleService.syncWithSemai();

      dataOut.data.transportVehicle.records = records;
      dataOut.data.transportVehicle.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get('')
  @ApiOkResponse({ type: TransportVehicleEntity, isArray: true })
  async getAll() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        transportVehicle: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.transportVehicleService.getAll();

      dataOut.data.transportVehicle.records = records;
      dataOut.data.transportVehicle.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get('deleted')
  @UseRoles({
    resource: 'carsData',
    action: 'delete',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: TransportVehicleEntity, isArray: true })
  async getAllDeleted() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        transportVehicle: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.transportVehicleService.getAllDeleted();

      dataOut.data.transportVehicle.records = records;
      dataOut.data.transportVehicle.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get(':id')
  @UseRoles({
    resource: 'carsData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: TransportVehicleEntity })
  async getById(@Param('id') id: string) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        transportVehicle: null,
      },
      logs: {},
    };

    try {
      const record = await this.transportVehicleService.getById(id);

      dataOut.data.transportVehicle = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }

  @Post('search-first')
  @UseRoles({
    resource: 'carsData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: TransportVehicleEntity })
  async searchFirst(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        transportVehicle: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const record = await this.transportVehicleService.searchFirst(query);

      if (record) {
        dataOut.data.transportVehicle.records.push(record);
        dataOut.data.transportVehicle.totalRecords = 1;
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
    resource: 'carsData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: TransportVehicleEntity, isArray: true })
  async searchMany(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        transportVehicle: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.transportVehicleService.searchMany(query);

      dataOut.data.transportVehicle.records = records;
      dataOut.data.transportVehicle.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-first-deleted')
  @UseRoles({
    resource: 'carsData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: TransportVehicleEntity })
  async searchFirstDeleted(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        transportVehicle: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const record =
        await this.transportVehicleService.searchFirstDeleted(query);

      if (record) {
        dataOut.data.transportVehicle.records.push(record);
        dataOut.data.transportVehicle.totalRecords = 1;
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
    resource: 'carsData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: TransportVehicleEntity, isArray: true })
  async searchManyDeleted(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        transportVehicle: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records =
        await this.transportVehicleService.searchManyDeleted(query);

      dataOut.data.transportVehicle.records = records;
      dataOut.data.transportVehicle.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post()
  @UseRoles({
    resource: 'carsData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: TransportVehicleEntity })
  async create(@Body() dto: CreateTransportVehicleDto, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        transportVehicle: null,
      },
      logs: {},
    };

    try {
      const userId = req.user['sub'];
      const record = await this.transportVehicleService.create(dto, userId);

      dataOut.data.transportVehicle = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Patch(':id')
  @UseRoles({
    resource: 'carsData',
    action: 'update',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: TransportVehicleEntity })
  async updateById(
    @Param('id') id: string,
    @Body() dto: UpdateTransportVehicleDto,
    @Req() req: Request,
  ) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        transportVehicle: null,
      },
      logs: {},
    };

    try {
      const userId = req.user['sub'];
      const record = await this.transportVehicleService.updateById(
        id,
        dto,
        userId,
      );

      dataOut.data.transportVehicle = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Delete(':id')
  @UseRoles({
    resource: 'carsData',
    action: 'delete',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: TransportVehicleEntity })
  async deleteById(@Param('id') id: string, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        transportVehicle: null,
      },
      logs: {},
    };

    try {
      const userId = ''; // req.user['sub']
      const record = await this.transportVehicleService.deleteById(id, userId);

      dataOut.data.transportVehicle = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }
}
