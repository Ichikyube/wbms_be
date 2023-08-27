import {Status} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class CreateConfigRequestDto {
    editedValue?: string;
    @ApiProperty({ enum: Status})
    status: Status;
    start?: Date;
    end?: Date;
    userCreated?: string;
    userModified?: string;
}
