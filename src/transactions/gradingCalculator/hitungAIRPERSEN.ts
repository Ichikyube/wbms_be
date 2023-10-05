//Air
export function hitungAIRPERSEN(
  trxGradingAIRPERSEN: number,
  originWeighInKg: number,
  originWeighOutKg: number,
): number {
  const weightnetto = originWeighInKg - originWeighOutKg;
  if (trxGradingAIRPERSEN !== null) {
    return Math.round((trxGradingAIRPERSEN * weightnetto) / 100);
  }
  return 0; // Return 0 if trxGradingAIRPERSEN is null
}
