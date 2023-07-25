import { PartialType } from '@nestjs/swagger';
import { CreateTransactionDto } from './manual-transaction.dto';

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {}
