export function hitungLAINNYAPERSEN(
  adTransactionMILL_ID: string,
  qtyTbs: number,
  weightnetto: number,
  trxGradingPERSEN: number,
): number {
  if (trxGradingPERSEN !== null) {
    let trxGradingLAINNYAKG = Math.round(
      (trxGradingPERSEN * weightnetto) / 100,
    );

    if (adTransactionMILL_ID === 'AN41') {
      trxGradingLAINNYAKG = Math.round(
        (trxGradingPERSEN / 100) * weightnetto,
      );
    }

    return trxGradingLAINNYAKG;
  }

  // Return 0 if trxGradingLAINNYAPERSEN is null
  return 0;
}
