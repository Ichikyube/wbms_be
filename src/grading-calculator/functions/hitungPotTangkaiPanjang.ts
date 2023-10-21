//TangkaiPanjang
export function hitungPotTangkaiPanjang(
  adTransactionMILL_ID: string,
  qtyTbs: number,
  weightnetto: number,
  trxGradingPERSEN: number,
): number {
  let persentp: number = 0;
  if (trxGradingPERSEN !== null) {
    if (qtyTbs === 0 || qtyTbs === null) {
      // Display an error message (you can handle this as needed)
      console.error('Jumlah janjang 0 atau tidak ada.');
    } else {
      persentp = (trxGradingPERSEN / qtyTbs) * 100;

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
