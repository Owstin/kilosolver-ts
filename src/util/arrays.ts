const rangeArray = (range: number): number[] => {
  return Array.from(new Array(range), (_, i) => i);
}

const numberArray = (num: number | undefined, length: number): number[] => {
  try {
    return new Array(length).fill(num);
  } catch (e) {
    console.log('WRONG: ', num);
    console.log('WRONG: ', length);
    throw e;
  }
}

const compose = (arrayA: number[], arrayB: number[]) => {
  return arrayB.map(value => arrayA[value]);
}

const printArray = (array: any[]) => `[${array.join(', ')}]`;

const product = (range: number, length = 1) => {
  const product = new Array(Math.pow(range, length)).fill(undefined).map(() => numberArray(0, length));
  for (let i = 0; i < Math.pow(range, length); i++) {
    for (let j = 0; j < length; j++) {
      product[i][j] = j + (i % length);
    }
  }
  return product;
}

export {
  rangeArray,
  numberArray,
  compose,
  printArray,
  product
}
