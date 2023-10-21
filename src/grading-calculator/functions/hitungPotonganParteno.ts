export function hitungPotonganParteno(
  adTransactionMILL_ID: string,
  qtyTbs: number,
  weightnetto: number,
  trxGradingPERSEN: number,
): number {
  if (trxGradingPERSEN !== null) {
    let trxGradingPartenoKG = Math.round(
      (trxGradingPERSEN * weightnetto) / 100,
    );

    if (adTransactionMILL_ID === 'AN41') {
      trxGradingPartenoKG = Math.round(
        (trxGradingPERSEN / 100) * weightnetto,
      );
    }

    return trxGradingPartenoKG;
  }

  // Return 0 if trxGradingPartenoPERSEN is null
  return 0;
}
