//Buah Lewat Matang
export function hitungPotBuahLewatMatang(
  adTransactionMILL_ID: string,
  qtyTbs: number,
  weightnetto: number,
  trxGradingPERSEN: number,
): number {
  let persemblm: number = 0;
  if (trxGradingPERSEN !== null) {
    if (qtyTbs === 0 || qtyTbs === null) {
      // Display an error message (you can handle this as needed)
      console.error('Jumlah janjang 0 atau tidak ada.');
    } else {
      persemblm = trxGradingPERSEN / qtyTbs;

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
