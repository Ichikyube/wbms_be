import {
  Body,
  Get,
  Param,
  Post,
  Controller,
  Patch,
  Delete,
} from '@nestjs/common';
import { ConfigsService } from './configs.service';
import { UseRoles } from 'nest-access-control';
import { ApiTags } from '@nestjs/swagger';
import { CreateConfigDto } from './dto/Create-Config.dto';

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

  @Get('attr')
  @UseRoles({
    resource: 'configsData',
    action: 'read',
    possession: 'own',
  })
  async getAttributes() {
    return await this.configsService.getAttributes();
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
  async getById(@Param('id') id: string) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        config: null,
      },
      logs: {},
    };

    try {
      // const userId = req.user['id'];
      const userId = '';
      const record = await this.configsService.getById(id);

      dataOut.data.config = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }

  @Post()
  @UseRoles({
    resource: 'config',
    action: 'create',
    possession: 'own',
  })
  async create(@Body() dto: CreateConfigDto) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        config: null,
      },
      logs: {},
    };

    try {
      // const userId = req.user['id'];
      const userId = '';
      const record = await this.configsService.create(dto);

      dataOut.data.config = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Patch(':id')
  @UseRoles({
    resource: 'config',
    action: 'update',
    possession: 'own',
  })
  async updateById(@Param('id') id: string, @Body() dto: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        config: null,
      },
      logs: {},
    };

    try {
      const userId = ''; //req.user['id'];
      console.log(id);
      const record = await this.configsService.updateById(id, dto);

      dataOut.data.config = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Delete(':id')
  @UseRoles({
    resource: 'config',
    action: 'delete',
    possession: 'own',
  })
  async deleteById(@Param('id') id: string) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        config: null,
      },
      logs: {},
    };

    try {
      const userId = ''; // req.user['id'];
      const record = await this.configsService.deleteById(id);

      dataOut.data.config = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }
}
