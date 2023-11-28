import {
  Body,
  Get,
  Param,
  Post,
  Controller,
  Patch,
  Delete,
  Req,
  Sse,
  Res,
  ForbiddenException,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Request, Response } from 'express';
import { CitiesService } from './cities.service';
import { CreateCityDto, UpdateCityDto } from './dto';
import { CityEntity } from 'src/entities';
import { ac } from 'src/settings/rbac.config';
import { Observable } from 'rxjs';

@ApiTags('Cities')
@ApiBearerAuth('access-token')
@Controller('cities')
export class CitiesController {
  constructor(private citiesService: CitiesService) {}

  @Sse('sse')
  async updateCities(@Res() res: Response): Promise<Observable<any>> {
    return await this.citiesService.updateView();
  }

  @Get('')
  @ApiOkResponse({ type: CityEntity, isArray: true })
  async getAll(@Req() req: Request) {
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
    const permission = ac.can(req.user['role']).readAny('City');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
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
  @ApiCreatedResponse({ type: CityEntity, isArray: true })
  async getAllDeleted(@Req() req: Request) {
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
    const permission = ac.can(req.user['role']).deleteAny('City');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
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
  @ApiCreatedResponse({ type: CityEntity })
  async getById(@Param('id') id: string, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        city: null,
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('City');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
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
  @ApiCreatedResponse({ type: CityEntity })
  async searchFirst(@Body() query: any, @Req() req: Request) {
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
    const permission = ac.can(req.user['role']).readAny('City');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
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
  @ApiCreatedResponse({ type: CityEntity, isArray: true })
  async searchMany(@Body() query: any, @Req() req: Request) {
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
    const permission = ac.can(req.user['role']).readAny('City');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
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
  @ApiCreatedResponse({ type: CityEntity })
  async searchFirstDeleted(@Body() query: any, @Req() req: Request) {
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
    const permission = ac.can(req.user['role']).readAny('City');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
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
  @ApiCreatedResponse({ type: CityEntity, isArray: true })
  async searchManyDeleted(@Body() query: any, @Req() req: Request) {
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
    const permission = ac.can(req.user['role']).readAny('City');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
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
    const permission = ac.can(req.user['role']).readAny('City');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const userId = req.user['sub'];
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
    const permission = ac.can(req.user['role']).readAny('City');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const userId = req.user['sub'];
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
    const permission = ac.can(req.user['role']).readAny('City');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const userId = req.user['sub'];
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
