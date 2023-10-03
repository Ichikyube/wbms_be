export function txxGradingWAJIBValidate(
  trxGradingWAJIB: number,
  originWeighInKg: number,
  originWeighOutKg: number,
  adTransactionMILL_ID: string,
): number {
  const weightnetto = originWeighInKg - originWeighOutKg;
  if (trxGradingWAJIB !== null) {
    let trxGradingWAJIBKG = Math.round((trxGradingWAJIB * weightnetto) / 100);

    if (adTransactionMILL_ID === 'AN41') {
      trxGradingWAJIBKG = Math.round((trxGradingWAJIB / 100) * weightnetto);
    }

    return trxGradingWAJIBKG;
  }

  return 0; // Return 0 if trxGradingWAJIB is null
}
