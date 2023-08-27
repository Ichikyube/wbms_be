import { PartialType } from '@nestjs/swagger';
import { CreateConfigRequestDto } from './create-config-request.dto';

export class UpdateConfigRequestDto extends PartialType(CreateConfigRequestDto) {}
