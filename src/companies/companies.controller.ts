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
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto, UpdateCompanyDto } from './dto';
import { UseRoles } from 'nest-access-control';
import { CompanyEntity } from 'src/entities';

@ApiTags('Companies')
@UseRoles({
  resource: 'companiesData',
  action: 'read',
  possession: 'own',
})
@Controller('companies')
export class CompaniesController {
  constructor(private companiesService: CompaniesService) {}

  @Get('')
  @UseRoles({
    resource: 'companiesData',
    action: 'delete',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: CompanyEntity, isArray: true })
  async getAll() {
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

  @Get('attr')
  @UseRoles({
    resource: 'citiesData',
    action: 'read',
    possession: 'own',
  })
  async getAttributes() {
    return await this.companiesService.getAttributes();
  }

  @Get('deleted')
  @UseRoles({
    resource: 'companiesData',
    action: 'delete',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: CompanyEntity, isArray: true })
  async getAllDeleted() {
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
  @UseRoles({
    resource: 'companiesData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: CompanyEntity })
  async getById(@Param('id') id: string) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        company: null,
      },
      logs: {},
    };

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
  @UseRoles({
    resource: 'companiesData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: CompanyEntity })
  async searchFirst(@Body() query: any) {
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
  @UseRoles({
    resource: 'companiesData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: CompanyEntity, isArray: true })
  async searchMany(@Body() query: any) {
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
  @UseRoles({
    resource: 'companiesData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: CompanyEntity })
  async searchFirstDeleted(@Body() query: any) {
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
  @UseRoles({
    resource: 'companiesData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: CompanyEntity, isArray: true })
  async searchManyDeleted(@Body() query: any) {
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
  @UseRoles({
    resource: 'companiesData',
    action: 'create',
    possession: 'own',
  })
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
  @UseRoles({
    resource: 'companiesData',
    action: 'update',
    possession: 'own',
  })
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
  @UseRoles({
    resource: 'companiesData',
    action: 'delete',
    possession: 'own',
  })
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
