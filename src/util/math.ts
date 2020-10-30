import bigInt, { BigInteger } from 'big-integer';

const factorial = (num: number): BigInteger => {
  if (num < 2) {
    return bigInt(1);
  }
  let total = bigInt(2);
  for (let i = 3; i <= num; i++) {
    total = total.multiply(i);
  }
  return total;
}

const combination = (n: number, k: number): number => {
  if (k < 0 || k > n) {
    return 0;
  }
  if (k === 0 || k === n) {
    return 1;
  }

  let combination = 1;
  for (let i = 0; i < k; i++) {
    combination = Math.floor(combination * (n - i) / (i + 1));
  }
  return combination;
}

const sum = (numArray: number[]): number => numArray.reduce((acc, num) => acc += num);

// -7 % 3 = -1 ❌
// mod(-7, 3) = 2 ✅
const mod = (n: number, m: number) => ((n % m) + m) % m;

export {
  factorial,
  combination,
  sum,
  mod
}
