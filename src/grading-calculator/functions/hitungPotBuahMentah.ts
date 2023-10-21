//Buah Mentah
export function hitungPotBuahMentah(
  adTransactionMILL_ID: string,
  qtyTbs: number,
  weightnetto: number,
  trxGradingPERSEN: number,
): number {
  let persenbm: number;
  let trxGradingBMKG: number = 0;
  if (trxGradingPERSEN !== null) {
    if (qtyTbs === 0 || qtyTbs === null) {
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

  return trxGradingBMKG;
}
