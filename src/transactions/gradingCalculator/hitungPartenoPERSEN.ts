export function hitungPartenoPERSEN(
  trxGradingPartenoPERSEN: number,
  originWeighInKg: number,
  originWeighOutKg: number,
  adTransactionMILL_ID: string,
): number {
  const weightnetto = originWeighInKg - originWeighOutKg;
  if (trxGradingPartenoPERSEN !== null) {
    let trxGradingPartenoKG = Math.round(
      (trxGradingPartenoPERSEN * weightnetto) / 100,
    );

    if (adTransactionMILL_ID === 'AN41') {
      trxGradingPartenoKG = Math.round(
        (trxGradingPartenoPERSEN / 100) * weightnetto,
      );
    }

    return trxGradingPartenoKG;
  }

  // Return 0 if trxGradingPartenoPERSEN is null
  return 0;
}
