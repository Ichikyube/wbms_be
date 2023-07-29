import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  ValidateNested,
  ArrayNotEmpty,
} from 'class-validator';
import { CreateGrantDto } from 'src/accessControl/roles/dto/create-grant.dto';

export class CreatePermissionDto {
  @IsNotEmpty()
  @IsString()
  readonly resource: string;

  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => CreateGrantDto)
  readonly grants?: CreateGrantDto[];
}
