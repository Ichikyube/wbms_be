import { Injectable } from '@nestjs/common';
import { JsonObject } from '@prisma/client/runtime/library';
import { hitungPotonganAir } from 'src/grading-calculator/functions/hitungPotonganAir';
import { hitungPotBuahLewatMatang } from 'src/grading-calculator/functions/hitungPotBuahLewatMatang';
import { hitungPotBuahMentah } from 'src/grading-calculator/functions/hitungPotBuahMentah';
import { hitungPotonganBrondolan } from 'src/grading-calculator/functions/hitungPotonganBrondolan';
import { hitungPotonganLainnya } from 'src/grading-calculator/functions/hitungPotonganLainnya';
import { hitungPotonganParteno } from 'src/grading-calculator/functions/hitungPotonganParteno';
import { hitungPotonganSampah } from 'src/grading-calculator/functions/hitungPotonganSampah';
import { hitungPotTandanKosong } from 'src/grading-calculator/functions/hitungPotTandanKosong';
import { hitungPotTangkaiPanjang } from 'src/grading-calculator/functions/hitungPotTangkaiPanjang';
import { hitungPotonganWajib } from 'src/grading-calculator/functions/hitungPotonganWajib';

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

    const calculatedBM = hitungPotBuahMentah(
      millCode,
      qtyTbs,
      weightnetto,
      trxGradingBMPERSEN,
    );
    const calculatedBLM = hitungPotBuahLewatMatang(
      millCode,
      qtyTbs,
      weightnetto,
      trxGradingBLMPERSEN,
    );
    const calculatedWater = hitungPotonganAir(
      millCode,
      qtyTbs,
      weightnetto,
      trxGradingAIRPERSEN,
    );
    const calculatedTrash = hitungPotonganSampah(
      millCode,
      qtyTbs,
      weightnetto,
      trxGradingSAMPAHPERSEN,
    );
    const calculatedTP = hitungPotTangkaiPanjang(
      millCode,
      qtyTbs,
      weightnetto,
      trxGradingTPPERSEN,
    );
    const calculatedTK = hitungPotTandanKosong(
      millCode,
      qtyTbs,
      weightnetto,
      trxGradingTKPERSEN,
    );
    const calculatedParteno = hitungPotonganParteno(
      millCode,
      qtyTbs,
      weightnetto,
      trxGradingPartenoPERSEN,
    );
    const calculatedBrondolan = hitungPotonganBrondolan(
      millCode,
      qtyTbs,
      weightnetto,
      trxGradingBrondolanPERSEN,
    );
    // const calculatedPotonganOthers = hitungPotonganLainnya(millCode, qtyTbs, weightnetto, trxGradingTPPesen);
    const calculatedObligatory = hitungPotonganWajib(millCode, qtyTbs, weightnetto, trxGradingWajibPERSEN);
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
