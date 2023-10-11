export function hitungWAJIBPERSEN(
  adTransactionMILL_ID: string,
  qtyTbs: number,
  weightnetto: number,
  trxGradingPERSEN: number,
): number {
  if (trxGradingPERSEN !== null) {
    let trxGradingWAJIBKG = Math.round((trxGradingPERSEN * weightnetto) / 100);

    if (adTransactionMILL_ID === 'AN41') {
      trxGradingWAJIBKG = Math.round((trxGradingPERSEN / 100) * weightnetto);
    }

    return trxGradingWAJIBKG;
  }

  return 0; // Return 0 if trxGradingWAJIB is null
}
