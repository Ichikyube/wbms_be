export function hitungBrondolanPERSEN(
  adTransactionMILL_ID: string,
  qtyTbs: number,
  weightnetto: number,
  trxGradingPERSEN: number,
): number {
  if (trxGradingPERSEN !== null) {
    return Math.round((trxGradingPERSEN * weightnetto) / 100);
  }
  return 0; // Return 0 if trxGradingPERSEN is null
}
