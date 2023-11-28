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
import { CustomersService } from './customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from './dto';
import { CustomerEntity } from 'src/entities';
import { ac } from 'src/settings/rbac.config';

@ApiTags('Customers')
@ApiBearerAuth('access-token')
@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get('')
  @ApiCreatedResponse({ type: CustomerEntity, isArray: true })
  async getAll(@Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customer: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Customer');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const records = await this.customersService.getAll();

      dataOut.data.customer.records = records;
      dataOut.data.customer.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get('deleted')
  @ApiCreatedResponse({ type: CustomerEntity, isArray: true })
  async getAllDeleted(@Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customer: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Customer');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const records = await this.customersService.getAllDeleted();

      dataOut.data.customer.records = records;
      dataOut.data.customer.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get(':id')
  @ApiCreatedResponse({ type: CustomerEntity })
  async getById(@Param('id') id: string, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customer: null,
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Customer');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const record = await this.customersService.getById(id);

      dataOut.data.customer = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }

  @Post('search-first')
  @ApiCreatedResponse({ type: CustomerEntity })
  async searchFirst(@Body() query: any, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customer: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Customer');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const record = await this.customersService.searchFirst(query);

      if (record) {
        dataOut.data.customer.records.push(record);
        dataOut.data.customer.totalRecords = 1;
      }
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-many')
  @ApiCreatedResponse({ type: CustomerEntity, isArray: true })
  async searchMany(@Body() query: any, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customer: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Customer');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const records = await this.customersService.searchMany(query);

      dataOut.data.customer.records = records;
      dataOut.data.customer.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-first-deleted')
  @ApiCreatedResponse({ type: CustomerEntity })
  async searchFirstDeleted(@Body() query: any, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customer: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Customer');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const record = await this.customersService.searchFirstDeleted(query);

      if (record) {
        dataOut.data.customer.records.push(record);
        dataOut.data.customer.totalRecords = 1;
      }
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-many-deleted')
  @ApiCreatedResponse({ type: CustomerEntity, isArray: true })
  async searchManyDeleted(@Body() query: any, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customer: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Customer');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const records = await this.customersService.searchManyDeleted(query);

      dataOut.data.customer.records = records;
      dataOut.data.customer.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post()
  @ApiCreatedResponse({ type: CustomerEntity })
  async create(@Body() dto: CreateCustomerDto, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customer: null,
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Customer');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const userId = req.user['sub'];
      const record = await this.customersService.create(dto, userId);

      dataOut.data.customer = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: CustomerEntity })
  async updateById(
    @Param('id') id: string,
    @Body() dto: UpdateCustomerDto,
    @Req() req: Request,
  ) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customer: null,
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Customer');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const userId = req.user['sub'];
      const record = await this.customersService.updateById(id, dto, userId);

      dataOut.data.customer = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: CustomerEntity })
  async deleteById(@Param('id') id: string, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customer: null,
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('Customer');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const userId = req.user['sub'];
      const record = await this.customersService.deleteById(id, userId);

      dataOut.data.customer = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }
}
