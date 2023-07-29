import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { GrantEntity } from './grant.entity';
export class PermissionEntity {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  resource: string;
  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => GrantEntity)
  readonly grants?: GrantEntity[];

}


