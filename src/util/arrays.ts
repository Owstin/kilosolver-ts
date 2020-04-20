const rangeArray = (range: number): number[] => {
  return Array.from(new Array(range), (_, i) => i);
}

const numberArray = (num: number | undefined, length: number): number[] => {
  return new Array(length).fill(num);
}

const compose = (arrayA: number[], arrayB: number[]) => {
  return arrayB.map(value => arrayA[value]);
}

export {
  rangeArray,
  numberArray,
  compose
}
