export const isEven = (num: number): any => {
  return num === parseFloat(`${num}`) ? !(num % 2) : void 0;
};

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});
