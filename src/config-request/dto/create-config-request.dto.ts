import {RequestStatus, Status} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class CreateConfigRequestDto {
    @ApiProperty({ enum: RequestStatus})
    status: string;
    @ApiProperty() start?: Date;
    @ApiProperty() end?: Date;
    @ApiProperty() configId: number;
}
