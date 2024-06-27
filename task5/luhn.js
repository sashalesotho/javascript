//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (num) => {
  const str = num.replaceAll(' ', '');
  if (str.length <= 1) return false;
  for (let i = 0; i < num.length; i++) {
    if (typeof (+num[i]) !== 'number') return false;
  }
  const arr1 = [];
  for (let i = str.length - 2; i >= 0; i -= 2) {
    arr1.unshift(str[i] * 2 <= 9 ? str[i] * 2 : str[i] * 2 - 9);
  }
  const arr2 = [];
  for (let i = str.length - 1; i >= 0; i -= 2) {
    arr2.unshift(+str[i]);
  }
  return [...arr1, ...arr2].reduce((acc, el) => acc + el, 0) % 10 === 0;
};
