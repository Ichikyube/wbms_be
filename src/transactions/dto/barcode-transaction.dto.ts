import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import { QrcodeDto } from 'src/semai/dto/qrcode.dto';

export class BarcodeTransactionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  tType: number;

  bonTripNo?: string;
  progressStatus: number;
  potonganWajib: number;
  potonganLain: number;
  jsonData: QrcodeDto;
}
