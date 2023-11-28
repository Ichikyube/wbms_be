import {
  Body,
  Get,
  Param,
  Post,
  Controller,
  Patch,
  Delete,
  Req,
  UseGuards,
  ForbiddenException,
} from '@nestjs/common';
import { Request } from 'express';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { MillsService } from './mills.service';
import { CreateMillDto, UpdateMillDto } from './dto';
import { MillEntity } from 'src/entities';
import { ac } from 'src/settings/rbac.config';

@ApiTags('Mills')
@ApiBearerAuth('access-token')
@Controller('mills')
export class MillsController {
  constructor(private millsService: MillsService) {}

  @Get('')
  @ApiCreatedResponse({ type: MillEntity, isArray: true })
  async getAll() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        mill: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.millsService.getAll();

      dataOut.data.mill.records = records;
      dataOut.data.mill.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get('deleted')
  @ApiCreatedResponse({ type: MillEntity, isArray: true })
  async getAllDeleted(@Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        mill: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Mill');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const records = await this.millsService.getAllDeleted();

      dataOut.data.mill.records = records;
      dataOut.data.mill.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get(':id')
  @ApiCreatedResponse({ type: MillEntity })
  async getById(@Param('id') id: string, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        mill: null,
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Mill');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const record = await this.millsService.getById(id);

      dataOut.data.mill = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }

  @Post('search-first')
  @ApiCreatedResponse({ type: MillEntity })
  async searchFirst(@Body() query: any, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        mill: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Mill');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const record = await this.millsService.searchFirst(query);

      if (record) {
        dataOut.data.mill.records.push(record);
        dataOut.data.mill.totalRecords = 1;
      }
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-many')
  @ApiCreatedResponse({ type: MillEntity, isArray: true })
  async searchMany(@Body() query: any, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        mill: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Mill');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const records = await this.millsService.searchMany(query);

      dataOut.data.mill.records = records;
      dataOut.data.mill.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-first-deleted')
  @ApiCreatedResponse({ type: MillEntity })
  async searchFirstDeleted(@Body() query: any, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        mill: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Mill');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const record = await this.millsService.searchFirstDeleted(query);

      if (record) {
        dataOut.data.mill.records.push(record);
        dataOut.data.mill.totalRecords = 1;
      }
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-many-deleted')
  @ApiCreatedResponse({ type: MillEntity, isArray: true })
  async searchManyDeleted(@Body() query: any, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        mill: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Mill');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const records = await this.millsService.searchManyDeleted(query);

      dataOut.data.mill.records = records;
      dataOut.data.mill.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post()
  @ApiCreatedResponse({ type: MillEntity })
  async create(@Body() dto: CreateMillDto, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        mill: null,
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Mill');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const userId = req.user['sub'];
      const record = await this.millsService.create(dto, userId);

      dataOut.data.mill = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: MillEntity })
  async updateById(
    @Param('id') id: string,
    @Body() dto: UpdateMillDto,
    @Req() req: Request,
  ) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        mill: null,
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Mill');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const userId = req.user['sub'];
      const record = await this.millsService.updateById(id, dto, userId);

      dataOut.data.mill = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: MillEntity })
  async deleteById(@Param('id') id: string, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        mill: null,
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Mill');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const userId = ''; // req.user['sub']
      const record = await this.millsService.deleteById(id, userId);

      dataOut.data.mill = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }
}
