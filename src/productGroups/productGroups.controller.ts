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
import { ProductGroupsService } from './productGroups.service';
import { CreateProductGroupDto, UpdateProductGroupDto } from './dto';
import { ProductGroupEntity } from 'src/entities';
import { ac } from 'src/settings/rbac.config';

@ApiTags('Product Groups')
@ApiBearerAuth('access-token')
@Controller('product-groups')
export class ProductGroupsController {
  constructor(private productGroupsService: ProductGroupsService) {}

  @Get('')
  @ApiCreatedResponse({ type: ProductGroupEntity, isArray: true })
  async getAll(@Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        productGroup: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('ProductGroup');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const records = await this.productGroupsService.getAll();

      dataOut.data.productGroup.records = records;
      dataOut.data.productGroup.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get('deleted')
  @ApiCreatedResponse({ type: ProductGroupEntity, isArray: true })
  async getAllDeleted(@Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        productGroup: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('ProductGroup');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const records = await this.productGroupsService.getAllDeleted();

      dataOut.data.productGroup.records = records;
      dataOut.data.productGroup.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get(':id')
  @ApiCreatedResponse({ type: ProductGroupEntity })
  async getById(@Param('id') id: string, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        productGroup: null,
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('ProductGroup');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const record = await this.productGroupsService.getById(id);

      dataOut.data.productGroup = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }

  @Post('search-first')
  @ApiCreatedResponse({ type: ProductGroupEntity })
  async searchFirst(@Body() query: any, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        productGroup: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('ProductGroup');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const record = await this.productGroupsService.searchFirst(query);

      if (record) {
        dataOut.data.productGroup.records.push(record);
        dataOut.data.productGroup.totalRecords = 1;
      }
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-many')
  @ApiCreatedResponse({ type: ProductGroupEntity, isArray: true })
  async searchMany(@Body() query: any, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        productGroup: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('ProductGroup');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const records = await this.productGroupsService.searchMany(query);

      dataOut.data.productGroup.records = records;
      dataOut.data.productGroup.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-first-deleted')
  @ApiCreatedResponse({ type: ProductGroupEntity })
  async searchFirstDeleted(@Body() query: any, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        productGroup: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('ProductGroup');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const record = await this.productGroupsService.searchFirstDeleted(query);

      if (record) {
        dataOut.data.productGroup.records.push(record);
        dataOut.data.productGroup.totalRecords = 1;
      }
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-many-deleted')
  @ApiCreatedResponse({ type: ProductGroupEntity, isArray: true })
  async searchManyDeleted(@Body() query: any, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        productGroup: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('ProductGroup');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const records = await this.productGroupsService.searchManyDeleted(query);

      dataOut.data.productGroup.records = records;
      dataOut.data.productGroup.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post()
  @ApiCreatedResponse({ type: ProductGroupEntity })
  async create(@Body() dto: CreateProductGroupDto, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        productGroup: null,
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('ProductGroup');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const userId = req.user['sub'];
      const record = await this.productGroupsService.create(dto, userId);

      dataOut.data.productGroup = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ProductGroupEntity })
  async updateById(
    @Param('id') id: string,
    @Body() dto: UpdateProductGroupDto,
    @Req() req: Request,
  ) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        productGroup: null,
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('ProductGroup');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const userId = req.user['sub'];
      const record = await this.productGroupsService.updateById(
        id,
        dto,
        userId,
      );

      dataOut.data.productGroup = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: ProductGroupEntity })
  async deleteById(@Param('id') id: string, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        productGroup: null,
      },
      logs: {},
    };
    const permission = ac.can(req.user['role']).readAny('ProductGroup');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    try {
      const userId = ''; // req.user['sub']
      const record = await this.productGroupsService.deleteById(id, userId);

      dataOut.data.productGroup = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }
}
