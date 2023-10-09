import { ApiProperty } from '@nestjs/swagger';

export class GradingCalculatorDto {
  qtyTbs?: number;
  weightnetto?: number;
  millCode?: string;
  trxGradingAIRPERSEN?: number;
  trxGradingTPPesen?: number;
  trxGradingTKPesen?: number;
  trxGradingSAMPAHPERSEN?: number;
  trxGradingBLMPERSEN?: number;
  trxGradingBMPERSEN?: number;
  trxGradingPartenoPERSEN?: number;
  trxGradingBrondolanPERSEN?: number;
}
