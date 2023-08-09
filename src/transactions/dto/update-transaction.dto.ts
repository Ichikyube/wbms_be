import { PartialType } from '@nestjs/swagger';
import { CreateTransactionDto } from './create-transactionDto';

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {}
