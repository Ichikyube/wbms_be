//Sampah
export function trxGradingSAMPAHPERSENValidate(
  trxGradingSAMPAHPERSEN: number,
  originWeighInKg: number,
  originWeighOutKg: number,
  adTransactionMILLID: string,
): number {
  let trxGradingSAMPAHKG = 0;
  const weightnetto = originWeighInKg - originWeighOutKg;
  if (trxGradingSAMPAHPERSEN !== null) {
    trxGradingSAMPAHKG = Math.round(
      (trxGradingSAMPAHPERSEN / weightnetto) * 100,
    );
  }

  if (adTransactionMILLID === 'BA4l' || adTransactionMILLID === 'BN41') {
    trxGradingSAMPAHKG = 2 * trxGradingSAMPAHPERSEN;
  }

  return trxGradingSAMPAHKG;
}
