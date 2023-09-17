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
import { ConfigsService } from './configs.service';
import { UseRoles } from 'nest-access-control';
import { ApiTags } from '@nestjs/swagger';
import { CreateConfigDto } from './dto/create-config.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';
@ApiTags('Configs')
@Controller('configs')
export class ConfigsController {
  constructor(private configsService: ConfigsService) {}

  @Get('')
  @UseRoles({
    resource: 'configsData',
    action: 'delete',
    possession: 'own',
  })
  async getAll() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        config: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.configsService.getAll();

      dataOut.data.config.records = records;
      dataOut.data.config.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get('env')
  @UseRoles({
    resource: 'configsData',
    action: 'read',
    possession: 'own',
  })
  getEnv() {
    return this.configsService.getEnv();
  }

  @Post('search-many')
  @UseRoles({
    resource: 'configsData',
    action: 'read',
    possession: 'own',
  })
  async searchMany(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        config: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.configsService.searchMany(query);

      dataOut.data.config.records = records;
      dataOut.data.config.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-first')
  @UseRoles({
    resource: 'config',
    action: 'read',
    possession: 'own',
  })
  async searchFirst(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        config: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const record = await this.configsService.searchFirst(query);

      if (record) {
        dataOut.data.config.records.push(record);
        dataOut.data.config.totalRecords = 1;
      }
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Get(':id')
  @UseRoles({
    resource: 'config',
    action: 'read',
    possession: 'own',
  })
  async getById(@Param('id') id: number) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        config: null,
      },
      logs: {},
    };

    try {
      const record = await this.configsService.getById(id);

      dataOut.data.config = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }

  @Patch(':id')
  @UseRoles({
    resource: 'config',
    action: 'update',
    possession: 'own',
  })
  async editById(@Param('id') id: number, @Body() dto: any, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        config: null,
      },
      logs: {},
    };

    try {
      const userId = req.user['sub'];
      const record = await this.configsService.editById(id, dto, userId);

      dataOut.data.config = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Post()
  create(@Body() dto: any) {
    return this.configsService.create(dto);
  }

  @Delete(':id')
  deleteById(@Param('id') id: number) {
    return this.configsService.deleteById(id);
  }
}
