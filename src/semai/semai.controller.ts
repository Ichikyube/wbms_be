import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Inject,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { SemaiService } from './semai.service';
import { DecodeQrcodeDto, UpdateSemaiDto } from './dto';
import { ApiSecurity } from '@nestjs/swagger';
import { AxiosService } from './axios.service';
import { SemaiAxiosInterceptor } from './semai.interceptor';

@ApiTags('Semai')
@ApiSecurity('ApiKeyAuth')
@ApiBearerAuth('access-token')
@Controller('semai')
export class SemaiController {
  constructor(
    private readonly semaiService: SemaiService,
    private readonly axiosService: AxiosService,
  ) {}
  @Get('resetUrl')
  resetConfig() {
    return this.axiosService.resetConfig();
  }


  @Get('products')
  @UseInterceptors(SemaiAxiosInterceptor)
  products(): Promise<{ status: boolean; message: string; data: { products: any[]; }; logs: {}; }> {
    return this.semaiService.products();
  }

  @Get('sites')
  @UseInterceptors(SemaiAxiosInterceptor)
  sites() {
    return this.semaiService.sites();
  }

  @Get('storage-tanks')
  storageTanks() {
    return this.semaiService.storageTanks();
  }

  @Get('transport-vehicles')
  transportVehicles() {
    return this.semaiService.transportVehicles();
  }

  @Get('transporters')
  transporters() {
    return this.semaiService.transporters();
  }

  @Get('vehicle-operators')
  vehicleOperators() {
    return this.semaiService.vehicleOperators();
  }

  @Post('decode-qrcode')
  decodeQrcode(@Body() dto: DecodeQrcodeDto) {
    return this.semaiService.decodeQrcode(dto);
  }

  @Post('dispatch-delivery')
  dispatchDelivery(@Body() dto: any) {
    return this.semaiService.dispatchDelivery(dto);
  }

  @Post('reject-delivery')
  rejectDelivery(@Body() dto: any) {
    return this.semaiService.rejectDelivery(dto);
  }

  @Post('close-delivery-as-accepted')
  closeDeliveryAccepted(@Body() dto: any) {
    return this.semaiService.closeDeliveryCanceled(dto);
  }

  @Post('close-delivery-as-canceled')
  closeDeliveryCanceled(@Body() dto: any) {
    return this.semaiService.closeDeliveryCanceled(dto);
  }

  @Post('close-delivery-as-rejected')
  closeDeliveryRejected(@Body() dto: any) {
    return this.semaiService.closeDeliveryRejected(dto);
  }

  @Post('validate-dispatch-delivery')
  validateDispatchDelivery(@Body() dto: any) {
    return this.semaiService.validateDispatchDelivery(dto);
  }

  @Post('validate-unloading')
  validateUnloading(@Body() dto: any) {
    return this.semaiService.validateUnloading(dto);
  }

  @Post('encode-qrcode')
  encodeQrcode(@Body() dto: any) {
    return this.semaiService.encodeQrcode(dto);
  }
}
