export function hitungTandanKosongPERSEN(
    trxGradingTandanKosongPERSEN: number,
    originWeighInKg: number,
    originWeighOutKg: number,
  ): number {
    const weightnetto = originWeighInKg - originWeighOutKg;
    if (trxGradingTandanKosongPERSEN !== null) {
      return Math.round((trxGradingTandanKosongPERSEN * weightnetto) / 100);
    }
    return 0; // Return 0 if trxGradingTandanKosongPERSEN is null
  }
  