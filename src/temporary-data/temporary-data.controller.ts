import { Controller, Post, Body, Inject, Get, Delete, Param } from '@nestjs/common';
import { TemporaryDataService } from './temporary-data.service';
import { CreateTemporaryDataDto } from './dto/create-temporaryData.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Temporary-Data')
@ApiBearerAuth('access-token')
@Controller('temporary-data')
export class TemporaryDataController {
  constructor(
    @Inject(TemporaryDataService)
    private temporaryDataService: TemporaryDataService,
  ) {}

  @Get('all')
  async getAllData(): Promise<{ [key: string]: any }> {
    return this.temporaryDataService.getAllData();
  }

  @Post('admin-request')
  async insertReqData(@Body() data: CreateTemporaryDataDto) {
    await this.temporaryDataService.insertAdminRequestData(data);
  }

  @Post('transaction')
  async insertTrxData(@Body() data: CreateTemporaryDataDto) {
    await this.temporaryDataService.insertTransactionData(data);
  }
  @Post('many-transaction')
  async insertManyTrxData(@Body() data: any[]) {
    await this.temporaryDataService.insertManyTemporaryData(data);
  }

  @Post(':id/approved')
  async submitTemporaryData(@Param('id') id: string) {
    return await this.temporaryDataService.approveTemporaryData(id);
  }
  @Delete(':id')
  async deleteAllTemporaryTransactionsData() {
    await this.temporaryDataService.deleteAllTransactionsData();
  }
  @Delete(':id')
  async deleteTemporaryTransactionsData(id: string) {
    await this.temporaryDataService.deleteDataById(id);
  }
  @Delete(':id')
  async deleteAdminRequestData(id: string) {
    await this.temporaryDataService.deleteAdminRequestData(id);
  }
}
