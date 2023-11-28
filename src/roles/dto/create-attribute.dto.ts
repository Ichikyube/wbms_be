import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreateAttributeDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  attr: string;
}
