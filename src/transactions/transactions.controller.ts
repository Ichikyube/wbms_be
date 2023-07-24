import {
  Body,
  Get,
  Param,
  Post,
  Controller,
  Patch,
  Query,
} from '@nestjs/common';
import { TransactionService } from './transactions.service';
import { CreateTransactionDto } from './dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { UseRoles } from 'nest-access-control';

@Controller('api/transactions')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Get('')
  @UseRoles({
    resource: 'transactionsData',
    action: 'read',
    possession: 'any',
  })
  getAll() {
    return this.transactionService.getAll();
  }

  @Get(':id')
  @UseRoles({
    resource: 'transaction',
    action: 'read',
    possession: 'any',
  })
  getById(@Param('id') id: string) {
    return this.transactionService.getById(id);
  }

  @Post('open-create-qrcode-semai')
  @UseRoles({
    resource: 'transactionsData',
    action: 'create',
    possession: 'any',
  })
  openCreateByQrcodeSemai(@Body() body: any) {
    return this.transactionService.openCreateByQrcodeSemai(body);
  }

  @Post('search-many')
  @UseRoles({
    resource: 'transactionsData',
    action: 'read',
    possession: 'any',
  })
  searchMany(@Body() query: any) {
    return this.transactionService.searchMany(query);
  }

  @Post('search-first')
  @UseRoles({
    resource: 'transaction',
    action: 'read',
    possession: 'any',
  })
  searchFirst(@Body() query: any) {
    return this.transactionService.searchFirst(query);
  }

  @Get('search-qr')
  @UseRoles({
    resource: 'transaction',
    action: 'read',
    possession: 'any',
  })
  searchByQR(@Body() query: any) {
    return this.transactionService.searchByQR(query);
  }

  @Get('getByPlateNo')
  @UseRoles({
    resource: 'transaction',
    action: 'read',
    possession: 'any',
  })
  getByPlateNo(@Query() query: any) {
    return this.transactionService.getByPlateNo(query);
  }

  @Post()
  @UseRoles({
    resource: 'transaction',
    action: 'create',
    possession: 'any',
  })
  create(@Body() dto: CreateTransactionDto) {
    return this.transactionService.create(dto);
  }

  @Patch(':id')
  @UseRoles({
    resource: 'transaction',
    action: 'update',
    possession: 'any',
  })
  updateById(@Param('id') id: string, @Body() dto: UpdateTransactionDto) {
    return this.transactionService.updateById(id, dto);
  }
}
