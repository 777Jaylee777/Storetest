export function calculatePrice(price, currency) {
  switch (currency) {
    case 'EUR':
      return price * 1.14;
    case 'USD':
      return price * 1.19;
    default:
      return price;
  }
}

export function calculateTotal(cart, currency) {
  let totalUSD = 0;
  Object.keys(cart).forEach((itemName) => {
    totalUSD += cart[itemName].price * cart[itemName].quantity;
  });
  return calculatePrice(totalUSD, currency).toFixed(2);
}

export function getCurrencySymbol(currencyFilter) {
  switch (currencyFilter) {
    case 'GBP':
      return '£';
    case 'EUR':
      return '€';
    case 'USD':
      return '$';
    default:
      return '';
  }
}