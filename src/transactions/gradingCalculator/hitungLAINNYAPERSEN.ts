export function hitungLAINNYAPERSEN(
  trxGradingLAINNYAPERSEN: number,
  originWeighInKg: number,
  originWeighOutKg: number,
  adTransactionMILL_ID: string,
): number {
  const weightnetto = originWeighInKg - originWeighOutKg;
  if (trxGradingLAINNYAPERSEN !== null) {
    let trxGradingLAINNYAKG = Math.round(
      (trxGradingLAINNYAPERSEN * weightnetto) / 100,
    );

    if (adTransactionMILL_ID === 'AN41') {
      trxGradingLAINNYAKG = Math.round(
        (trxGradingLAINNYAPERSEN / 100) * weightnetto,
      );
    }

    return trxGradingLAINNYAKG;
  }

  // Return 0 if trxGradingLAINNYAPERSEN is null
  return 0;
}
