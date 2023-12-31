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
import { CustomerGroupsService } from './customerGroups.service';
import { CreateCustomerGroupDto, UpdateCustomerGroupDto } from './dto';
import { CustomerGroupEntity } from 'src/entities';
import { ac } from 'src/settings/rbac.config';

@ApiTags('Customer Groups')
@ApiBearerAuth('access-token')
@Controller('customer-groups')
export class CustomerGroupsController {
  constructor(private customerGroupsService: CustomerGroupsService) {}

  @Get('')
  @ApiCreatedResponse({ type: CustomerGroupEntity, isArray: true })
  async getAll(@Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customerGroups: {
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
      const records = await this.customerGroupsService.getAll();

      dataOut.data.customerGroups.records = records;
      dataOut.data.customerGroups.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get('deleted')
  @ApiCreatedResponse({ type: CustomerGroupEntity, isArray: true })
  async getAllDeleted(@Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customerGroups: {
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
      const records = await this.customerGroupsService.getAllDeleted();

      dataOut.data.customerGroups.records = records;
      dataOut.data.customerGroups.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get(':id')
  @ApiCreatedResponse({ type: CustomerGroupEntity })
  async getById(@Param('id') id: string, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customerGroups: null,
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('City');
    if (!permission.granted) {
        throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const record = await this.customerGroupsService.getById(id);

      dataOut.data.customerGroups = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }

  @Post('search-first')
  @ApiCreatedResponse({ type: CustomerGroupEntity })
  async searchFirst(@Body() query: any, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customerGroups: {
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
      const record = await this.customerGroupsService.searchFirst(query);

      if (record) {
        dataOut.data.customerGroups.records.push(record);
        dataOut.data.customerGroups.totalRecords = 1;
      }
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-many')
  @ApiCreatedResponse({ type: CustomerGroupEntity, isArray: true })
  async searchMany(@Body() query: any, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customerGroups: {
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
      const records = await this.customerGroupsService.searchMany(query);

      dataOut.data.customerGroups.records = records;
      dataOut.data.customerGroups.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-first-deleted')
  @ApiCreatedResponse({ type: CustomerGroupEntity })
  async searchFirstDeleted(@Body() query: any, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customerGroups: {
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
      const record = await this.customerGroupsService.searchFirstDeleted(query);

      if (record) {
        dataOut.data.customerGroups.records.push(record);
        dataOut.data.customerGroups.totalRecords = 1;
      }
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-many-deleted')
  @ApiCreatedResponse({ type: CustomerGroupEntity, isArray: true })
  async searchManyDeleted(@Body() query: any, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customerGroups: {
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
      const records = await this.customerGroupsService.searchManyDeleted(query);

      dataOut.data.customerGroups.records = records;
      dataOut.data.customerGroups.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post()
  @ApiCreatedResponse({ type: CustomerGroupEntity })
  async create(@Body() dto: CreateCustomerGroupDto, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customerGroups: null,
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('City');
    if (!permission.granted) {
        throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const userId = req.user['sub'];
      const record = await this.customerGroupsService.create(dto, userId);

      dataOut.data.customerGroups = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: CustomerGroupEntity })
  async updateById(
    @Param('id') id: string,
    @Body() dto: UpdateCustomerGroupDto,
    @Req() req: Request,
  ) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customerGroups: null,
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('City');
    if (!permission.granted) {
        throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const userId = req.user['sub'];
      const record = await this.customerGroupsService.updateById(
        id,
        dto,
        userId,
      );

      dataOut.data.customerGroups = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: CustomerGroupEntity })
  async deleteById(@Param('id') id: string, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        customerGroups: null,
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('City');
    if (!permission.granted) {
        throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const userId = req.user['sub'];
      const record = await this.customerGroupsService.deleteById(id, userId);

      dataOut.data.customerGroups = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }
}
