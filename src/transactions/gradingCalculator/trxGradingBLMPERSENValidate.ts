//Buah Lewat Matang
export function trxGradingBLMPERSENValidate(
  trxGradingBLMPERSEN: number,
  qtyTbs: number,
  adTransactionMILL_ID: string,
  originWeighInKg: number,
  originWeighOutKg: number,
  persentasiTangkaiPanjang: number,
): number {
  let persemblm: number = 0;
  const weightnetto = originWeighInKg - originWeighOutKg;
  if (trxGradingBLMPERSEN !== null) {
    if (qtyTbs === 0 || qtyTbs === null) {
      // Display an error message (you can handle this as needed)
      console.error('Jumlah janjang 0 atau tidak ada.');
    } else {
      persemblm = trxGradingBLMPERSEN / qtyTbs;

      if (adTransactionMILL_ID === 'BA41') {
        return Math.round((persemblm * weightnetto) / 100);
      }

      if (adTransactionMILL_ID === 'BN41') {
        persemblm *= 100;

        if (persemblm >= 5) {
          return Math.round(((25 / 100) * (persemblm - 5) * weightnetto) / 100);
        } else {
          return 0;
        }
      }
    }
  }

  // Return 0 if none of the conditions are met
  return 0;
}
