//TangkaiPanjang
export function hitungTPPERSEN(
  trxGradingTPPesen: number,
  qtyTbs: number,
  adTransactionMILL_ID: string,
  originWeighInKg: number,
  originWeighOutKg: number,
): number {
  let persentp: number = 0;
  const weightnetto = originWeighInKg - originWeighOutKg;
  if (trxGradingTPPesen !== null) {
    if (qtyTbs === 0 || qtyTbs === null) {
      // Display an error message (you can handle this as needed)
      console.error('Jumlah janjang 0 atau tidak ada.');
    } else {
      persentp = (trxGradingTPPesen / qtyTbs) * 100;

      if (adTransactionMILL_ID === 'BA41') {
        return Math.round((persentp * weightnetto) / 100);
      }

      if (adTransactionMILL_ID === 'BN41') {
        return Math.round((persentp * (1 / 100) * weightnetto) / 100);
      }
    }
  }

  // Return 0 if none of the conditions are met
  return 0;
}
