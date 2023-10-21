import { Body, Get, Param, Post, Controller, Patch, Req } from '@nestjs/common';
import { Request, Response } from 'express';
import { ConfigsService } from './configs.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators';
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { YAML_CONFIG_FILENAME } from './configuration';
import { join } from 'path';
import { UpdateConfigDto } from './dto/update-config.dto';
@ApiTags('Configs')
@ApiBearerAuth('access-token')
@Controller('configs')
export class ConfigsController {
  constructor(private configsService: ConfigsService) {}

  @Get('get-wb-port')
  getWbPort() {
    const wbPort = this.configsService.get('WBMS_WB.PORT');
    return { wbPort };
  }

  // @Get('get-config')
  // getConfig() {
  //   return this.configsService.getConfig();
  // }

  @Post('/update-var')
  updateConfigVar(@Body() newConfig: Record<string, any>) {
    try {
      const configContent = fs.readFileSync(
        join(__dirname, YAML_CONFIG_FILENAME),
        'utf8',
      );
      const config = yaml.load(configContent);

      // Update the config with the new values
      for (const key in newConfig) {
        if (newConfig.hasOwnProperty(key) && config.hasOwnProperty(key)) {
          config[key] = newConfig[key];
        }
      }

      // Write the updated config back to the file
      fs.writeFileSync(
        join(__dirname, YAML_CONFIG_FILENAME),
        yaml.dump(config),
      );

      return { success: true };
    } catch (error) {
      return { success: false, error: 'Error updating config' };
    }
  }

  @Post('/update-env')
  updateEnvironment(@Body() data: { newVariable: string }) {
    try {
      // Assuming your environment file is named .env
      const envFile = fs.readFileSync('.env', 'utf-8');
      const updatedEnvFile = envFile + `\nNEW_VARIABLE=${data.newVariable}`;
      fs.writeFileSync('.env', updatedEnvFile);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @Post(':id/edit-function')
  async updateFunctions(
    @Body() data: UpdateConfigDto,
    @Param('id') id: number,
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
      const [params, code] = data.defaultVal.split('<##FunctionCode##>');
      const record = await this.configsService.editGradingFunction(
        id,
        params,
        code,
        userId,
      );

      dataOut.data.config = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: data, error };
    }

    return dataOut;
  }

  // @Get()
  // getConfigVar() {
  //   try {
  //     const configContent = fs.readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8');
  //     const config = yaml.load(configContent);
  //     return config;
  //   } catch (error) {
  //     return { error: 'Error loading config' };
  //   }
  //   // Set the Cache-Control header
  //   // res.setHeader(
  //   //   `Cache-Control`,
  //   //   `max-age=${timeRemainingInSeconds}, private=true, immutable=true`,
  //   // );
  // }

  @Get('')
  @Public()
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
    // Calculate the time remaining until 24:00
    // const now = new Date();
    // const midnight = new Date(now);
    // midnight.setHours(24, 0, 0, 0);
    // const timeRemainingInSeconds = Math.floor(
    //   (midnight.getTime() - now.getTime()) / 1000,
    // );
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
  @Public()
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

  @Patch(':id/approve')
  async approveRequest(
    @Param('id') id: number,
    tempvalue: string,
    schedule: Date,
    @Req() req: Request,
  ) {
    const userId = req.user['sub'];
    return await this.configsService.requestApproved(
      id,
      tempvalue,
      schedule,
      userId,
    );
  }

  @Patch(':id/ended')
  async rejectRequest(@Req() req: Request, @Param('id') id: number) {
    return await this.configsService.requestEnded(id);
  }
}
