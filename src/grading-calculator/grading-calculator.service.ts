import { Injectable } from '@nestjs/common';
import { JsonObject } from '@prisma/client/runtime/library';
import { hitungAIRPERSEN } from 'src/grading-calculator/gradingCalculator/hitungAIRPERSEN';
import { hitungBLMPERSEN } from 'src/grading-calculator/gradingCalculator/hitungBLMPERSEN';
import { hitungBMPERSEN } from 'src/grading-calculator/gradingCalculator/hitungBMPERSEN';
import { hitungBrondolanPERSEN } from 'src/grading-calculator/gradingCalculator/hitungBrondolanPERSEN';
import { hitungLAINNYAPERSEN } from 'src/grading-calculator/gradingCalculator/hitungLAINNYAPERSEN';
import { hitungPartenoPERSEN } from 'src/grading-calculator/gradingCalculator/hitungPartenoPERSEN';
import { hitungSAMPAHPERSEN } from 'src/grading-calculator/gradingCalculator/hitungSAMPAHPERSEN';
import { hitungTandanKosongPERSEN } from 'src/grading-calculator/gradingCalculator/hitungTKPERSEN';
import { hitungTPPERSEN } from 'src/grading-calculator/gradingCalculator/hitungTPPERSEN';
import { hitungWAJIBPERSEN } from 'src/grading-calculator/gradingCalculator/hitungWAJIBPERSEN';

@Injectable()
export class GradingCalculatorService {
  hitungPotongan(
    millCode: string,
    qtyTbs: number,
    weightnetto: number,
    trxGradingAIRPERSEN: number,
    trxGradingTPPERSEN: number,
    trxGradingTKPERSEN: number,
    trxGradingSAMPAHPERSEN: number,
    trxGradingBLMPERSEN: number,
    trxGradingBMPERSEN: number,
    trxGradingPartenoPERSEN: number,
    trxGradingBrondolanPERSEN: number,
    trxGradingWajibPERSEN: number
  ) {

    const calculatedBM = hitungBMPERSEN(
      millCode,
      qtyTbs,
      weightnetto,
      trxGradingBMPERSEN,
    );
    const calculatedBLM = hitungBLMPERSEN(
      millCode,
      qtyTbs,
      weightnetto,
      trxGradingBLMPERSEN,
    );
    const calculatedWater = hitungAIRPERSEN(
      millCode,
      qtyTbs,
      weightnetto,
      trxGradingAIRPERSEN,
    );
    const calculatedTrash = hitungSAMPAHPERSEN(
      millCode,
      qtyTbs,
      weightnetto,
      trxGradingSAMPAHPERSEN,
    );
    const calculatedTP = hitungTPPERSEN(
      millCode,
      qtyTbs,
      weightnetto,
      trxGradingTPPERSEN,
    );
    const calculatedTK = hitungTandanKosongPERSEN(
      millCode,
      qtyTbs,
      weightnetto,
      trxGradingTKPERSEN,
    );
    const calculatedParteno = hitungPartenoPERSEN(
      millCode,
      qtyTbs,
      weightnetto,
      trxGradingPartenoPERSEN,
    );
    const calculatedBrondolan = hitungBrondolanPERSEN(
      millCode,
      qtyTbs,
      weightnetto,
      trxGradingBrondolanPERSEN,
    );
    // const calculatedPotonganOthers = hitungLAINNYAPERSEN(millCode, qtyTbs, weightnetto, trxGradingTPPesen);
    const calculatedObligatory = hitungWAJIBPERSEN(millCode, qtyTbs, weightnetto, trxGradingWajibPERSEN);
    return {
      calculatedBM,
      calculatedBLM,
      calculatedWater,
      calculatedTrash,
      calculatedTP,
      calculatedTK,
      calculatedParteno,
      calculatedBrondolan,
      // calculatedOthers,
      calculatedObligatory
    };
  }
  

}
