export function trxGradingLAINNYAPERSENValidate(
  trxGradingLAINNYAPERSEN: number,
  originWeighInKg: number,
  originWeighOutKg: number,
  adTransactionMILL_ID: string,
): number {
  const weightnetto = originWeighInKg - originWeighOutKg;
  if (trxGradingLAINNYAPERSEN !== null) {
    let trxGradingLATNNYAKG = Math.round(
      (trxGradingLAINNYAPERSEN * weightnetto) / 100,
    );

    if (adTransactionMILL_ID === 'AN41') {
      trxGradingLATNNYAKG = Math.round(
        (trxGradingLAINNYAPERSEN / 100) * weightnetto,
      );
    }

    return trxGradingLATNNYAKG;
  }

  // Return 0 if trxGradingLAINNYAPERSEN is null
  return 0;
}
