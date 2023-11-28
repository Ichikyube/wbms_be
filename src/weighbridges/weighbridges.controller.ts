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
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { WeighbridgesService } from './weighbridges.service';
import { CreateWeighbridgeDto, UpdateWeighbridgeDto } from './dto';
import { WeighbridgeEntity } from 'src/entities';
import { ac } from 'src/settings/rbac.config';

@ApiTags('Weighbridges')
@ApiBearerAuth('access-token')
@Controller('weighbridges')
export class WeighbridgesController {
  constructor(private weighbridgesService: WeighbridgesService) {}

  @Get('')
  @ApiOkResponse({ type: WeighbridgeEntity, isArray: true })
  async getAll(@Req() req: Request) {
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
    const permission = ac.can(req.user['role']).readAny('Weighbridge');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
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
  @ApiCreatedResponse({ type: WeighbridgeEntity, isArray: true })
  async getAllDeleted(@Req() req: Request) {
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
    const permission = ac.can(req.user['role']).readAny('Weighbridge');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
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
  @ApiCreatedResponse({ type: WeighbridgeEntity })
  async searchFirst(@Body() query: any, @Req() req: Request) {
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
    const permission = ac.can(req.user['role']).readAny('Weighbridge');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
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
  @ApiCreatedResponse({ type: WeighbridgeEntity, isArray: true })
  async searchMany(@Body() query: any, @Req() req: Request) {
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
    const permission = ac.can(req.user['role']).readAny('Weighbridge');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
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
  @ApiCreatedResponse({ type: WeighbridgeEntity })
  async searchFirstDeleted(@Body() query: any, @Req() req: Request) {
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
    const permission = ac.can(req.user['role']).readAny('Weighbridge');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
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
  @ApiCreatedResponse({ type: WeighbridgeEntity, isArray: true })
  async searchManyDeleted(@Body() query: any, @Req() req: Request) {
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
    const permission = ac.can(req.user['role']).readAny('Weighbridge');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
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
    const permission = ac.can(req.user['role']).readAny('Weighbridge');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
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
    const permission = ac.can(req.user['role']).readAny('Weighbridge');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
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
    const permission = ac.can(req.user['role']).readAny('Weighbridge');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
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
