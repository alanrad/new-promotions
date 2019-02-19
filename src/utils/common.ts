export const isEven = (num: number): any => {
  return num === parseFloat(`${num}`) ? !(num % 2) : void 0;
};
