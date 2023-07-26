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

import { CustomerTypesService } from './customerTypes.service';
import { CreateCustomerTypeDto, UpdateCustomerTypeDto } from './dto';
import { UseRoles } from 'nest-access-control';
import { CustomerTypeEntity } from 'src/entities';

@ApiTags('Customer Types')
@Controller('customer-types')
export class CustomerTypesController {
  constructor(private customerTypesService: CustomerTypesService) {}

  @Get('')
  @UseRoles({
    resource: 'customerTypesData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: CustomerTypeEntity, isArray: true })
  async getAll() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customerType: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.customerTypesService.getAll();

      dataOut.data.customerType.records = records;
      dataOut.data.customerType.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get('deleted')
  @UseRoles({
    resource: 'customerTypesData',
    action: 'delete',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: CustomerTypeEntity, isArray: true })
  async getAllDeleted() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customerType: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.customerTypesService.getAllDeleted();

      dataOut.data.customerType.records = records;
      dataOut.data.customerType.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get(':id')
  @UseRoles({
    resource: 'customerType',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: CustomerTypeEntity })
  async getById(@Param('id') id: string) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customerType: null,
      },
      logs: {},
    };

    try {
      const record = await this.customerTypesService.getById(id);

      dataOut.data.customerType = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }

  @Post('search-first')
  @UseRoles({
    resource: 'customerType',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: CustomerTypeEntity })
  async searchFirst(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customerType: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const record = await this.customerTypesService.searchFirst(query);

      if (record) {
        dataOut.data.customerType.records.push(record);
        dataOut.data.customerType.totalRecords = 1;
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
    resource: 'customerTypesData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: CustomerTypeEntity, isArray: true })
  async searchMany(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customerType: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.customerTypesService.searchMany(query);

      dataOut.data.customerType.records = records;
      dataOut.data.customerType.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-first-deleted')
  @UseRoles({
    resource: 'customerType',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: CustomerTypeEntity })
  async searchFirstDeleted(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customerType: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const record = await this.customerTypesService.searchFirstDeleted(query);

      if (record) {
        dataOut.data.customerType.records.push(record);
        dataOut.data.customerType.totalRecords = 1;
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
    resource: 'customerTypesData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: CustomerTypeEntity, isArray: true })
  async searchManyDeleted(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customerType: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.customerTypesService.searchManyDeleted(query);

      dataOut.data.customerType.records = records;
      dataOut.data.customerType.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post()
  @UseRoles({
    resource: 'customerType',
    action: 'create',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: CustomerTypeEntity })
  async create(@Body() dto: CreateCustomerTypeDto, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customerType: null,
      },
      logs: {},
    };

    try {
      const userId = ''; //req.user['id'];
      const record = await this.customerTypesService.create(dto, userId);

      dataOut.data.customerType = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Patch(':id')
  @UseRoles({
    resource: 'customerType',
    action: 'update',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: CustomerTypeEntity })
  async updateById(
    @Param('id') id: string,
    @Body() dto: UpdateCustomerTypeDto,
    @Req() req: Request,
  ) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customerType: null,
      },
      logs: {},
    };

    try {
      const userId = ''; //req.user['id'];
      console.log(id);
      const record = await this.customerTypesService.updateById(
        id,
        dto,
        userId,
      );

      dataOut.data.customerType = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Delete(':id')
  @UseRoles({
    resource: 'customerType',
    action: 'delete',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: CustomerTypeEntity })
  async deleteById(@Param('id') id: string, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customerType: null,
      },
      logs: {},
    };

    try {
      const userId = ''; // req.user['id'];
      const record = await this.customerTypesService.deleteById(id, userId);

      dataOut.data.customerType = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }
}
