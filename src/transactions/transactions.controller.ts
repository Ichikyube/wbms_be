import {
  Body,
  Get,
  Param,
  Post,
  Controller,
  Patch,
  Query,
  Delete,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { Request, Response } from 'express';
import { TransactionService } from './transactions.service';
import { CreateTransactionDto } from './dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { UseRoles } from 'nest-access-control';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TransactionEntity } from 'src/entities';
import { ExportToSapDto } from './dto/exportToSap.dto';

@ApiTags('Transactions')
@ApiBearerAuth('access-token')
// @UseInterceptors(CacheInterceptor)
@Controller('transactions')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Get('')
  @UseRoles({
    resource: 'transactionsData',
    action: 'read',
    possession: 'own',
  })
  getAll() {
    return this.transactionService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.transactionService.getById(id);
  }

  @Post('open-create-qrcode-semai')
  openCreateByQrcodeSemai(@Body() body: any) {
    return this.transactionService.openCreateByQrcodeSemai(body);
  }

  @Post('Sap')
  async searchManytoSAP(@Query('useXml') xml: boolean, @Body() payload: ExportToSapDto) {
    return await this.transactionService.searchManyToSAP(xml, payload);
  }

  @Post('search-many')
  searchMany(@Body() query: any) {
    return this.transactionService.searchMany(query);
  }

  @Post('search-first')
  searchFirst(@Body() query: any) {
    return this.transactionService.searchFirst(query);
  }

  @Get('search-qr')
  searchByQR(@Body() query: any) {
    return this.transactionService.searchByQR(query);
  }

  @Get('getByPlateNo')
  @UseRoles({
    resource: 'transactionsData',
    action: 'read',
    possession: 'own',
  })
  getByPlateNo(@Query() query: any) {
    return this.transactionService.getByPlateNo(query);
  }

  @Post()
  create(@Body() dto: CreateTransactionDto) {
    return this.transactionService.create(dto);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'Transaction has been successfully updated.',
    type: UpdateTransactionDto,
  })
  updateById(@Param('id') id: string, @Body() dto: UpdateTransactionDto) {
    return this.transactionService.updateById(id, dto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Transaction has been successfully deleted.' })
  @ApiNotFoundResponse({ description: 'Transaction not found.' })
  async deleteById(@Param('id') id: string, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        id,
      },
      logs: {},
    };

    try {
      const userId = req.user['sub'];
      await this.transactionService.deleteById(id, userId);
      dataOut.message = `Transaction with id: '${id}' has successfully deleted`;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: id, error };
    }

    return dataOut;
  }


  // @Get()
  // async findAll(): Promise<string[]> {
  //   const cachedData = await this.cacheService.get('items');
  //   if (cachedData) {
  //     return JSON.parse(cachedData);
  //   }

  //   const data = ['item1', 'item2', 'item3'];
  //   await this.cacheService.set('items', JSON.stringify(data));

  //   return data;
  // }
}
