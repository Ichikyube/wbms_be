//Buah Mentah
export function hitungBMPERSEN(
  adTransactionMILL_ID: string,
  qtyTbs: number,
  weightnetto: number,
  trxGradingPERSEN: number,
): number {
  let persenbm: number;
  let trxGradingBMKG: number = 0;
  if (trxGradingPERSEN !== null) {
    if (qtyTbs === 0 || qtyTbs === null) {
      // Display an error message (you can handle this as needed)
      console.error('Jumlah janjang 0 atau tidak ada.');
      persenbm = 0;
    } else {
      persenbm = trxGradingPERSEN / qtyTbs;
    }

    if (adTransactionMILL_ID === 'BA41') {
      trxGradingBMKG = Math.round((persenbm * weightnetto) / 100);
    }

    if (adTransactionMILL_ID === 'BN41') {
      trxGradingBMKG = Math.round(persenbm * weightnetto * 0.5);
    }
  }

  // Return the relevant value based on your logic
  // For example, you might want to return trxGradingBMKG or trxGradingBMKG
  return trxGradingBMKG; // or return trxGradingBMKG;
}
