import { PartialType } from '@nestjs/swagger';
import { CreateConfigApprovalDto } from './create-config-approval.dto';

export class UpdateConfigApprovalDto extends PartialType(CreateConfigApprovalDto) {}
