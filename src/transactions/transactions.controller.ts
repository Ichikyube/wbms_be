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
  ForbiddenException,
} from '@nestjs/common';
import { Request } from 'express';
import { TransactionService } from './transactions.service';
import { CreateTransactionDto } from './dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { ac } from 'src/settings/rbac.config';

@ApiTags('Transactions')
@ApiBearerAuth('access-token')
@Controller('transactions')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Get('')
  getAll(@Req() req: Request) {
    const permission = ac.can(req.user['role']).readAny('Transaction');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    return this.transactionService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string, @Req() req: Request) {
    const permission = ac.can(req.user['role']).readAny('Transaction');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    return this.transactionService.getById(id);
  }

  @Post('open-create-qrcode-semai')
  openCreateByQrcodeSemai(@Body() body: any) {
    return this.transactionService.openCreateByQrcodeSemai(body);
  }

  @Post('apitpks')
  @ApiQuery({
    name: 'date',
    type: String,
    description: 'The selected date',
    example: '20230821',
  })
  @ApiQuery({
    name: 'millplant',
    type: String,
    required: false,
  })
  @ApiQuery({
    name: 'origin',
    type: String,
    required: false,
  })
  async downloadSAPWBpark(
    @Query('date') date: string,
    @Query('millplant') millplant: string = null,
    @Query('origin') origin: string = null,
    @Query('usexml') useXml: boolean = true,
  ) {
    const year = parseInt(date.substring(0, 4));
    const month = parseInt(date.substring(4, 6));
    const day = parseInt(date.substring(6, 8));
    const hour = 7;
    const inputDate = new Date(Date.UTC(year, month - 1, day, hour));
    return await this.transactionService.downloadSAPWBpark(
      inputDate,
      millplant,
      origin,
      useXml,
    );
  }

  @Post('all-dates')
  getTransactionDates(@Req() req: Request) {
    const permission = ac.can(req.user['role']).readAny('Transaction');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    return this.transactionService.getTransactionDates();
  }
  @Post('search-many')
  searchMany(@Body() query: any, @Req() req: Request) {
    const permission = ac.can(req.user['role']).readAny('Transaction');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    return this.transactionService.searchMany(query);
  }

  @Post('search-first')
  searchFirst(@Body() query: any, @Req() req: Request) {
    const permission = ac.can(req.user['role']).readAny('Transaction');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    return this.transactionService.searchFirst(query);
  }

  @Get('search-qr')
  searchByQR(@Body() query: any, @Req() req: Request) {
    const permission = ac.can(req.user['role']).readAny('Transaction');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    return this.transactionService.searchByQR(query);
  }

  @Get('getByPlateNo')
  getByPlateNo(@Query() query: any, @Req() req: Request) {
    const permission = ac.can(req.user['role']).readAny('Transaction');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    return this.transactionService.getByPlateNo(query);
  }

  @Post()
  create(@Body() dto: CreateTransactionDto, @Req() req: Request) {
    const permission = ac.can(req.user['role']).readAny('Transaction');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    return this.transactionService.create(dto);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'Transaction has been successfully updated.',
    type: UpdateTransactionDto,
  })
  updateById(
    @Param('id') id: string,
    @Body() dto: UpdateTransactionDto,
    @Req() req: Request,
  ) {
    const permission = ac.can(req.user['role']).readAny('Transaction');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
    return this.transactionService.updateById(id, dto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Transaction has been successfully deleted.' })
  @ApiNotFoundResponse({ description: 'Transaction not found.' })
  async deleteById(@Param('id') id: string, @Req() req: Request) {
    const permission = ac.can(req.user['role']).readAny('Transaction');
    if (!permission.granted) {
      throw new ForbiddenException('You do not have enough permissions');
    }
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
