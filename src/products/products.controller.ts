import {
  Body,
  Get,
  Param,
  Post,
  Controller,
  Patch,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './dto';
import { UseRoles } from 'nest-access-control';
import { ProductEntity } from 'src/entities';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('')
  @UseRoles({
    resource: 'productsData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: ProductEntity, isArray: true })
  async getAll() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        product: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.productsService.getAll();

      dataOut.data.product.records = records;
      dataOut.data.product.totalRecords = records.length;
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
    return await this.productsService.getAttributes();
  }

  @Get('deleted')
  @UseRoles({
    resource: 'productsData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: ProductEntity, isArray: true })
  async getAllDeleted() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        product: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.productsService.getAllDeleted();

      dataOut.data.product.records = records;
      dataOut.data.product.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get(':id')
  @UseRoles({
    resource: 'productsData',
    action: 'read',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: ProductEntity })
  async getById(@Param('id') id: string) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        product: null,
      },
      logs: {},
    };

    try {
      const record = await this.productsService.getById(id);

      dataOut.data.product = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }

  @Post('search-first')
  @UseRoles({
    resource: 'productsData',
    action: 'create',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: ProductEntity })
  async searchFirst(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        product: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const record = await this.productsService.searchFirst(query);

      if (record) {
        dataOut.data.product.records.push(record);
        dataOut.data.product.totalRecords = 1;
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
    resource: 'productsData',
    action: 'create',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: ProductEntity, isArray: true })
  async searchMany(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        product: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.productsService.searchMany(query);

      dataOut.data.product.records = records;
      dataOut.data.product.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post('search-first-deleted')
  @UseRoles({
    resource: 'productsData',
    action: 'create',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: ProductEntity })
  async searchFirstDeleted(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        product: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const record = await this.productsService.searchFirstDeleted(query);

      if (record) {
        dataOut.data.product.records.push(record);
        dataOut.data.product.totalRecords = 1;
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
    resource: 'productsData',
    action: 'create',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: ProductEntity, isArray: true })
  async searchManyDeleted(@Body() query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        product: {
          records: [],
          totalRecords: 0,
          page: 0,
        },
      },
      logs: {},
    };

    try {
      const records = await this.productsService.searchManyDeleted(query);

      dataOut.data.product.records = records;
      dataOut.data.product.totalRecords = records.length;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: query, error };
    }

    return dataOut;
  }

  @Post()
  @UseRoles({
    resource: 'productsData',
    action: 'create',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: ProductEntity })
  async create(@Body() dto: CreateProductDto, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        product: null,
      },
      logs: {},
    };

    try {
      const userId = req.user['sub'];
      const record = await this.productsService.create(dto, userId);

      dataOut.data.product = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Patch(':id')
  @UseRoles({
    resource: 'productsData',
    action: 'update',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: ProductEntity })
  async updateById(
    @Param('id') id: string,
    @Body() dto: UpdateProductDto,
    @Req() req: Request,
  ) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        product: null,
      },
      logs: {},
    };

    try {
      const userId = req.user['sub'];
      console.log(id);
      const record = await this.productsService.updateById(id, dto, userId);

      dataOut.data.product = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Delete(':id')
  @UseRoles({
    resource: 'productsData',
    action: 'delete',
    possession: 'own',
  })
  @ApiCreatedResponse({ type: ProductEntity })
  async deleteById(@Param('id') id: string, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        product: null,
      },
      logs: {},
    };

    try {
      const userId = ''; // req.user['sub']
      const record = await this.productsService.deleteById(id, userId);

      dataOut.data.product = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, param: id, error };
    }

    return dataOut;
  }
}
