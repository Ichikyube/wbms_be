import {
  Body,
  Get,
  Param,
  Post,
  Controller,
  Patch,
  Delete,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ConfigsService } from './configs.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CacheInterceptor } from '@nestjs/cache-manager';
@ApiTags('Configs')
@ApiBearerAuth('access-token')
@Controller('configs')
export class ConfigsController {
  constructor(private configsService: ConfigsService) {}

  @Get('')
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
    // Calculate the time remaining until 24:00
    // const now = new Date();
    // const midnight = new Date(now);
    // midnight.setHours(24, 0, 0, 0);
    // const timeRemainingInSeconds = Math.floor(
    //   (midnight.getTime() - now.getTime()) / 1000,
    // );

    try {
      const records = await this.configsService.getAll();

      dataOut.data.config.records = records;
      dataOut.data.config.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }
    // Set the Cache-Control header
    // res.setHeader(
    //   `Cache-Control`,
    //   `max-age=${timeRemainingInSeconds}, private=true, immutable=true`,
    // );

    return dataOut;
  }

  @Get('activetoday')
  async getActiveConfigsToday() {
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
      const records = await this.configsService.getActiveConfigsToday();

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
  getEnv() {
    return this.configsService.getEnv();
  }

  @Post('search-many')
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
  async editById(
    @Param('id') id: number,
    @Body() dto: any,
    @Req() req: Request,
  ) {
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
}
