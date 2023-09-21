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
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { WeighbridgesService } from './weighbridges.service';
import { CreateWeighbridgeDto, UpdateWeighbridgeDto } from './dto';
import { UseRoles } from 'nest-access-control';
import { WeighbridgeEntity } from 'src/entities';

@ApiTags('Weighbridges')
@Controller('weighbridges')
export class WeighbridgesController {
  constructor(private weighbridgesService: WeighbridgesService) {}

  @Get('')
  @UseRoles({
    resource: 'weightBridgesData',
    action: 'read',
    possession: 'own',
  })
  @ApiOkResponse({ type: WeighbridgeEntity, isArray: true })
  async getAll() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        weighbridge: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.weighbridgesService.getAll();

      dataOut.data.weighbridge.records = records;
      dataOut.data.weighbridge.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get('deleted')
  @UseRoles({
    resource: 'weightBridgesData',
    action: 'delete',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: WeighbridgeEntity, isArray: true })
  async getAllDeleted() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        weighbridge: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.weighbridgesService.getAllDeleted();

      dataOut.data.weighbridge.records = records;
      dataOut.data.weighbridge.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get(':id')
  @UseRoles({
    resource: 'weightBridgesData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: WeighbridgeEntity })
  async getById(@Param('id') id: string) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        weighbridge: null,
      },
      logs: {},
    };

    try {
      const record = await this.weighbridgesService.getById(id);

      dataOut.data.weighbridge = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }

  @Post('search-first')
  @UseRoles({
    resource: 'weightBridgesData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: WeighbridgeEntity })
  async searchFirst(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        weighbridge: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const record = await this.weighbridgesService.searchFirst(query);

      if (record) {
        dataOut.data.weighbridge.records.push(record);
        dataOut.data.weighbridge.totalRecords = 1;
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
    resource: 'weightBridgesData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: WeighbridgeEntity, isArray: true })
  async searchMany(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        weighbridge: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.weighbridgesService.searchMany(query);

      dataOut.data.weighbridge.records = records;
      dataOut.data.weighbridge.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-first-deleted')
  @UseRoles({
    resource: 'weightBridgesData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: WeighbridgeEntity })
  async searchFirstDeleted(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        weighbridge: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const record = await this.weighbridgesService.searchFirstDeleted(query);

      if (record) {
        dataOut.data.weighbridge.records.push(record);
        dataOut.data.weighbridge.totalRecords = 1;
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
    resource: 'weightBridgesData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: WeighbridgeEntity, isArray: true })
  async searchManyDeleted(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        weighbridge: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.weighbridgesService.searchManyDeleted(query);

      dataOut.data.weighbridge.records = records;
      dataOut.data.weighbridge.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post()
  @UseRoles({
    resource: 'weightBridgesData',
    action: 'create',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: WeighbridgeEntity })
  async create(@Body() dto: CreateWeighbridgeDto, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        weighbridge: null,
      },
      logs: {},
    };

    try {
      const userId = req.user['sub'];
      const record = await this.weighbridgesService.create(dto, userId);

      dataOut.data.weighbridge = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Patch(':id')
  @UseRoles({
    resource: 'weightBridgesData',
    action: 'update',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: WeighbridgeEntity })
  async updateById(
    @Param('id') id: string,
    @Body() dto: UpdateWeighbridgeDto,
    @Req() req: Request,
  ) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        weighbridge: null,
      },
      logs: {},
    };

    try {
      const userId = req.user['sub'];
      const record = await this.weighbridgesService.updateById(id, dto, userId);

      dataOut.data.weighbridge = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Delete(':id')
  @UseRoles({
    resource: 'weightBridgesData',
    action: 'delete',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: WeighbridgeEntity })
  async deleteById(@Param('id') id: string, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        weighbridge: null,
      },
      logs: {},
    };

    try {
      const userId = ''; // req.user['sub']
      const record = await this.weighbridgesService.deleteById(id, userId);

      dataOut.data.weighbridge = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }
}
