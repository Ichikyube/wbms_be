export function hitungBrondolanPERSEN(
  trxGradingBrondolanPERSEN: number,
  originWeighInKg: number,
  originWeighOutKg: number,
): number {
  const weightnetto = originWeighInKg - originWeighOutKg;
  if (trxGradingBrondolanPERSEN !== null) {
    return Math.round((trxGradingBrondolanPERSEN * weightnetto) / 100);
  }
  return 0; // Return 0 if trxGradingBrondolanPERSEN is null
}
