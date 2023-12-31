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
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto, UpdateCompanyDto } from './dto';
import { CompanyEntity } from 'src/entities';
import { ac } from 'src/settings/rbac.config';

@ApiTags('Companies')
@ApiBearerAuth('access-token')
@Controller('companies')
export class CompaniesController {
  constructor(private companiesService: CompaniesService) {}
  
  @Get('sync-with-semai')
  async syncWithSemai() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        companies: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.companiesService.syncWithSemai();

      dataOut.data.companies.records = records;
      dataOut.data.companies.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get('')
  @ApiCreatedResponse({ type: CompanyEntity, isArray: true })
  async getAll(@Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        company: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Company');
    if (!permission.granted) {
        throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const records = await this.companiesService.getAll();

      dataOut.data.company.records = records;
      dataOut.data.company.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }


  @Get('deleted')
  @ApiCreatedResponse({ type: CompanyEntity, isArray: true })
  async getAllDeleted(@Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        company: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Company');
    if (!permission.granted) {
        throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const records = await this.companiesService.getAllDeleted();

      dataOut.data.company.records = records;
      dataOut.data.company.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get(':id')
  @ApiCreatedResponse({ type: CompanyEntity })
  async getById(@Param('id') id: string, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        company: null,
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Company');
    if (!permission.granted) {
        throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const record = await this.companiesService.getById(id);

      dataOut.data.company = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }

  @Post('search-first')
  @ApiCreatedResponse({ type: CompanyEntity })
  async searchFirst(@Body() query: any, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        company: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Company');
    if (!permission.granted) {
        throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const record = await this.companiesService.searchFirst(query);

      if (record) {
        dataOut.data.company.records.push(record);
        dataOut.data.company.totalRecords = 1;
      }
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-many')
  @ApiCreatedResponse({ type: CompanyEntity, isArray: true })
  async searchMany(@Body() query: any, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        company: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Company');
    if (!permission.granted) {
        throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const records = await this.companiesService.searchMany(query);

      dataOut.data.company.records = records;
      dataOut.data.company.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-first-deleted')
  @ApiCreatedResponse({ type: CompanyEntity })
  async searchFirstDeleted(@Body() query: any, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        company: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Company');
    if (!permission.granted) {
        throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const record = await this.companiesService.searchFirstDeleted(query);

      if (record) {
        dataOut.data.company.records.push(record);
        dataOut.data.company.totalRecords = 1;
      }
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-many-deleted')
  @ApiCreatedResponse({ type: CompanyEntity, isArray: true })
  async searchManyDeleted(@Body() query: any, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        company: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Company');
    if (!permission.granted) {
        throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const records = await this.companiesService.searchManyDeleted(query);

      dataOut.data.company.records = records;
      dataOut.data.company.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post()
  @ApiCreatedResponse({ type: CompanyEntity })
  async create(@Body() dto: CreateCompanyDto, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        company: null,
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Company');
    if (!permission.granted) {
        throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const userId = req.user['sub'];
      const record = await this.companiesService.create(dto, userId);

      dataOut.data.company = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: CompanyEntity })
  async updateById(
    @Param('id') id: string,
    @Body() dto: UpdateCompanyDto,
    @Req() req: Request,
  ) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        company: null,
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Company');
    if (!permission.granted) {
        throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const userId = req.user['sub'];
      const record = await this.companiesService.updateById(id, dto, userId);

      dataOut.data.company = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: CompanyEntity })
  async deleteById(@Param('id') id: string, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        company: null,
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Company');
    if (!permission.granted) {
        throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const userId = req.user['sub'];
      const record = await this.companiesService.deleteById(id, userId);

      dataOut.data.company = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }
}
