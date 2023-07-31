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
  @UseRoles({
    resource: 'transactionsData',
    action: 'read',
    possession: 'own',
  })
  getById(@Param('id') id: string) {
    return this.transactionService.getById(id);
  }

  @Post('open-create-qrcode-semai')
  @UseRoles({
    resource: 'transactionsData',
    action: 'create',
    possession: 'own',
  })
  openCreateByQrcodeSemai(@Body() body: any) {
    return this.transactionService.openCreateByQrcodeSemai(body);
  }

  @Post('search-many')
  @UseRoles({
    resource: 'transactionsData',
    action: 'read',
    possession: 'own',
  })
  searchMany(@Body() query: any) {
    return this.transactionService.searchMany(query);
  }

  @Post('search-first')
  @UseRoles({
    resource: 'transactionsData',
    action: 'read',
    possession: 'own',
  })
  searchFirst(@Body() query: any) {
    return this.transactionService.searchFirst(query);
  }

  @Get('search-qr')
  @UseRoles({
    resource: 'transactionsData',
    action: 'read',
    possession: 'own',
  })
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
  @UseRoles({
    resource: 'transactionsData',
    action: 'create',
    possession: 'own',
  })
  create(@Body() dto: CreateTransactionDto) {
    return this.transactionService.create(dto);
  }

  @Patch(':id')
  @UseRoles({
    resource: 'transactionsData',
    action: 'update',
    possession: 'own',
  })
  updateById(@Param('id') id: string, @Body() dto: UpdateTransactionDto) {
    return this.transactionService.updateById(id, dto);
  }
}
