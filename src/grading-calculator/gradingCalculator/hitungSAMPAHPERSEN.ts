//Sampah
export function hitungSAMPAHPERSEN(
  adTransactionMILL_ID: string,
  qtyTbs: number,
  weightnetto: number,
  trxGradingPERSEN: number,
): number {
  let trxGradingSAMPAHKG = 0;
  if (trxGradingPERSEN !== null) {
    trxGradingSAMPAHKG = Math.round(
      (trxGradingPERSEN / weightnetto) * 100,
    );
  }

  if (adTransactionMILL_ID === 'BA4l' || adTransactionMILL_ID === 'BN41') {
    trxGradingSAMPAHKG = 2 * trxGradingPERSEN;
  }

  return trxGradingSAMPAHKG;
}
