import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateProfileDto {

  @ApiProperty() @IsString() @IsNotEmpty() name: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
  })
  file?: Express.Multer.File;

  @ApiProperty()
  @IsString()
  @IsOptional()
  division?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  position?: string;

  @ApiProperty({ required: false })
  // @IsPhoneNumber('IN')
  @IsOptional()
  phone?: string;

  @ApiProperty({
    example: '2022-01-01',
    description: 'The user date of birth',
    type: 'string',
    format: 'date',
  }) @IsOptional() doB?: Date;

  @ApiProperty({ required: false }) @IsString() @IsOptional() alamat?: string;
  
}
