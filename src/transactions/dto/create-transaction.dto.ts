import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator";
import { QrcodeDto } from "src/semai/dto/qrcode.dt";

export class CreateTransactionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  tType: number;

  bonTripNo?: string;
  progressStatus: number;
  // productId?: string;
  // transporterId?: string;
  // driverId?: string;
  // transportVehicleId?: string;
  // originSiteId:   string;
  // destinationSiteId:   string;
  // originSourceStorageTankId:   string;
  // destinationSinkStorageTankId:   string;
  potonganWajib: number;
  potonganLain: number;
  jsonData: QrcodeDto;
}
