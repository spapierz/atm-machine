export const formatToDollar = (balance: number) => {
  const formattedBalance = (balance / 100).toFixed(2);
  const dollarAmount = parseFloat(formattedBalance).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  return dollarAmount;
};