
import {Prisma, Action,Possession} from '@prisma/client'
import { IsNotEmpty, IsString } from 'class-validator';
import {ApiProperty} from '@nestjs/swagger'


export class CreatePermissionDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ enum: Action})
    action: Action;
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ enum: Possession})
    possesion: Possession;
    @IsNotEmpty()
    @IsString()
    attributes: string;
    userCreated: string;
    userModified: string;
}
