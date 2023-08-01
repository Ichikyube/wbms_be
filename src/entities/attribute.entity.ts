import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class AttributeEntity {
  @IsNotEmpty()
  @IsString()
  @ApiProperty() 
  attr: string;

}
