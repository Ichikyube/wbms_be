import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SemaiService } from './semai.service';
import { DecodeQrcodeDto, UpdateSemaiDto } from './dto';

@ApiTags('Semai')
@Controller('api/semai')
export class SemaiController {
  constructor(private readonly semaiService: SemaiService) {}
  @Get('products')
  @UseRoles({
    resource: 'employeeData',
    action: 'read',
    possession: 'any'
  })
  products() {
    return this.semaiService.products();
  }

  @Get('sites')
  @UseRoles({
    resource: 'employeeData',
    action: 'read',
    possession: 'any'
  })
  sites() {
    return this.semaiService.sites();
  }

  @Get('storage-tanks')
  @UseRoles({
    resource: 'employeeData',
    action: 'read',
    possession: 'any'
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
    resource: 'employeeData',
    action: 'read',
    possession: 'any'
  })
  transporters() {
    return this.semaiService.transporters();
  }

  @Get('vehicle-operators')
  @UseRoles({
    resource: 'employeeData',
    action: 'read',
    possession: 'any'
  })
  vehicleOperators() {
    return this.semaiService.vehicleOperators();
  }

  @Post('decode-qrcode')
  @UseRoles({
    resource: 'employeeData',
    action: 'read',
    possession: 'any'
  })
  decodeQrcode(@Body() dto: DecodeQrcodeDto) {
    return this.semaiService.decodeQrcode(dto);
  }

  @Post('dispatch-delivery')
  @UseRoles({
    resource: 'employeeData',
    action: 'read',
    possession: 'any'
  })
  dispatchDelivery(@Body() dto: any) {
    return this.semaiService.dispatchDelivery(dto);
  }

  @Post('reject-delivery')
  @UseRoles({
    resource: 'employeeData',
    action: 'read',
    possession: 'any'
  })
  rejectDelivery(@Body() dto: any) {
    return this.semaiService.rejectDelivery(dto);
  }

  @Post('close-delivery-as-accepted')
  @UseRoles({
    resource: 'employeeData',
    action: 'read',
    possession: 'any'
  })
  closeDeliveryAccepted(@Body() dto: any) {
    return this.semaiService.closeDeliveryCanceled(dto);
  }

  @Post('close-delivery-as-canceled')
  @UseRoles({
    resource: 'employeeData',
    action: 'read',
    possession: 'any'
  })
  closeDeliveryCanceled(@Body() dto: any) {
    return this.semaiService.closeDeliveryCanceled(dto);
  }

  @Post('close-delivery-as-rejected')
  @UseRoles({
    resource: 'employeeData',
    action: 'read',
    possession: 'any'
  })
  closeDeliveryRejected(@Body() dto: any) {
    return this.semaiService.closeDeliveryRejected(dto);
  }

  @Post('validate-dispatch-delivery')
  @UseRoles({
    resource: 'employeeData',
    action: 'read',
    possession: 'any'
  })
  validateDispatchDelivery(@Body() dto: any) {
    return this.semaiService.validateDispatchDelivery(dto);
  }

  @Post('validate-unloading')
  @UseRoles({
    resource: 'employeeData',
    action: 'read',
    possession: 'any'
  })
  validateUnloading(@Body() dto: any) {
    return this.semaiService.validateUnloading(dto);
  }

  @Post('encode-qrcode')
  @UseRoles({
    resource: 'employeeData',
    action: 'read',
    possession: 'any'
  })
  encodeQrcode(@Body() dto: any) {
    return this.semaiService.encodeQrcode(dto);
  }
}
