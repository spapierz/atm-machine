export const formatToDollar = (balance: number) => {
  const formattedBalance = '$' + (balance / 100).toFixed(2);
  return formattedBalance;
};