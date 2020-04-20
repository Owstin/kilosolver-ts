import { factorial, sum, combination } from './math';
import { rangeArray, numberArray } from './arrays';
import bigInt, { BigInteger } from 'big-integer';

const permutationToIndex = (perm: number[]): BigInteger => {
  let n = perm.length;
  let f = factorial(n - 1);
  let index = bigInt();
  while (n > 1) {
    index = index.add(bigInt(perm[0]).multiply(f));
    perm = perm.slice(1).map(x => x - +(x > perm[0]));
    n -= 1;
    f = f.divide(n);
  }
  return index;
}

const indexToPermutation = (index: BigInteger, num: number): number[] => {
  const perm = [];
  const p = rangeArray(num);
  let f = factorial(num - 1);
  for (let i = 0; i < num - 1; i++) {
    perm[i] = p.splice(+index.divide(f).toString(10), 1)[0];
    index = index.mod(f);
    f = f.divide(num - 1 - i);
  }

  return perm.concat(p);
}

const permutationParirty = (array: number[]): number => {
  const length = array.length;
  let parity = 0;
  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      if (array[i] > array[j]) {
        parity ^= 1;
      }
    }
  }
  return parity;
}

const indexToEvenPermutation = (index: BigInteger, num: number) => {
  let perm = indexToPermutation(index.multiply(2), num);
  if (permutationParirty(perm) === 1) {
    perm = perm.slice(0, -2).concat(perm.slice(-2).reverse());
  }
  return perm;
}

const combToIndex = (list: number[]): number => {
  let bits = list.length;
  let ones = sum(list);
  let zeros = bits - ones;
  if (zeros === 0 || ones === 0 || bits === 1) {
    return 0;
  }
  let b = combination(bits - 1, ones);
  let index = 0;
  while (zeros > 0 && ones > 0 && bits > 1) {
    bits -= 1;
    if (list[0] === 0) {
      zeros -= 1;
      b = Math.floor(b * zeros / bits);
    } else {
      index += b;
      b = Math.floor(b * ones / bits);
      ones -= 1;
    }
    list = list.slice(1); 
  }
  return index;
}

const indexToComb = (index: number, ones: number, bits?: number): number[] => {
  let b: number;
  if (index === 0) {
    if (bits === undefined) {
      return numberArray(1, ones);
    }
    return numberArray(0, bits - ones).concat(numberArray(1, ones));
  }
  if (bits === undefined) {
    bits = ones;
    b = combination(bits, ones);
    while (index > b) {
      bits += 1;
      b = combination(bits, ones);
    }
  }
  let zeros = bits - ones;
  b = combination(bits - 1, ones);
  const l = [];
  const interations = bits - 1;
  for (let i = 0; i < interations; i++) {
    bits = bits - 1;
    if (index < b) {
      l.push(0);
      zeros = zeros - 1;
      b = Math.floor(b * zeros / bits);
    } else {
      l.push(1);
      index -= b;
      b = Math.floor(b * ones / bits);
      ones = ones - 1;
    }
  }
  return l.concat(ones);
}

const permutationFromCycles = (cycles: number[], length: number) => {
  const boxedCycles = [cycles];
  const p = rangeArray(length);
  for (const cycle of boxedCycles) {
    for (let i = 0; i < cycle.length; i++) {
      p[cycle[i]] = cycle[(1 + i) % cycle.length]
    }
  }
  return p;
}

const unsparsifyList = (map: Record<number, number>, length: number) => {
  const l = numberArray(0, length);
  for (const [key, value] of Object.entries(map)) {
    l[+key] = value;
  }
  return l;
}

export {
  permutationToIndex,
  indexToPermutation,
  permutationParirty,
  indexToEvenPermutation,
  combToIndex,
  indexToComb,
  permutationFromCycles,
  unsparsifyList
}
