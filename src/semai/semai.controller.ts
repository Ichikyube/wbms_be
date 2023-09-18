import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SemaiService } from './semai.service';
import { DecodeQrcodeDto, UpdateSemaiDto } from './dto';
import { UseRoles } from 'nest-access-control';

@ApiTags('Semai')
@Controller('semai')
export class SemaiController {
  constructor(private readonly semaiService: SemaiService) {}
  @Get('products')
  @UseRoles({
    resource: 'semai',
    action: 'read',
    possession: 'own',
  })
  products() {
    return this.semaiService.products();
  }

  @Get('sites')
  @UseRoles({
    resource: 'semai',
    action: 'read',
    possession: 'own',
  })
  sites() {
    return this.semaiService.sites();
  }

  @Get('storage-tanks')
  @UseRoles({
    resource: 'semai',
    action: 'read',
    possession: 'own',
  })
  storageTanks() {
    return this.semaiService.storageTanks();
  }

  @Get('transport-vehicles')
  transportVehicles() {
    return this.semaiService.transportVehicles();
  }

  @Get('transporters')
  @UseRoles({
    resource: 'semai',
    action: 'read',
    possession: 'own',
  })
  transporters() {
    return this.semaiService.transporters();
  }

  @Get('vehicle-operators')
  @UseRoles({
    resource: 'semai',
    action: 'read',
    possession: 'own',
  })
  vehicleOperators() {
    return this.semaiService.vehicleOperators();
  }

  @Post('decode-qrcode')
  @UseRoles({
    resource: 'semai',
    action: 'read',
    possession: 'own',
  })
  decodeQrcode(@Body() dto: DecodeQrcodeDto) {
    return this.semaiService.decodeQrcode(dto);
  }

  @Post('dispatch-delivery')
  @UseRoles({
    resource: 'semai',
    action: 'read',
    possession: 'own',
  })
  dispatchDelivery(@Body() dto: any) {
    return this.semaiService.dispatchDelivery(dto);
  }

  @Post('reject-delivery')
  @UseRoles({
    resource: 'semai',
    action: 'read',
    possession: 'own',
  })
  rejectDelivery(@Body() dto: any) {
    return this.semaiService.rejectDelivery(dto);
  }

  @Post('close-delivery-as-accepted')
  @UseRoles({
    resource: 'semai',
    action: 'read',
    possession: 'own',
  })
  closeDeliveryAccepted(@Body() dto: any) {
    return this.semaiService.closeDeliveryCanceled(dto);
  }

  @Post('close-delivery-as-canceled')
  @UseRoles({
    resource: 'semai',
    action: 'read',
    possession: 'own',
  })
  closeDeliveryCanceled(@Body() dto: any) {
    return this.semaiService.closeDeliveryCanceled(dto);
  }

  @Post('close-delivery-as-rejected')
  @UseRoles({
    resource: 'semai',
    action: 'read',
    possession: 'own',
  })
  closeDeliveryRejected(@Body() dto: any) {
    return this.semaiService.closeDeliveryRejected(dto);
  }

  @Post('validate-dispatch-delivery')
  @UseRoles({
    resource: 'semai',
    action: 'read',
    possession: 'own',
  })
  validateDispatchDelivery(@Body() dto: any) {
    return this.semaiService.validateDispatchDelivery(dto);
  }

  @Post('validate-unloading')
  @UseRoles({
    resource: 'semai',
    action: 'read',
    possession: 'own',
  })
  validateUnloading(@Body() dto: any) {
    return this.semaiService.validateUnloading(dto);
  }

  @Post('encode-qrcode')
  @UseRoles({
    resource: 'semai',
    action: 'read',
    possession: 'own',
  })
  encodeQrcode(@Body() dto: any) {
    return this.semaiService.encodeQrcode(dto);
  }
}
