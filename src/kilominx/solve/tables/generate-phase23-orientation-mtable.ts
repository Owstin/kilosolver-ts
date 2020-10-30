import { combination, mod } from '../../../util/math'
import { numberArray, rangeArray, compose } from '../../../util/arrays'
import { indexToComb, combToIndex } from '../../../util/permutation';
import { moves } from '../../moves';
import moize from 'moize';

const generatePhse23OrientionMtable = () => {
  const outerLimit = combination(15, 5);
  const innerLimit = 3**5;
  const phaseMoveO = new Array(outerLimit * innerLimit).fill(undefined).map(() => numberArray(undefined, 6));
  const combs = Array.from(new Array(outerLimit), (_, i) => indexToComb(i, 5, 15));
  for (let i = 0; i < outerLimit; i++) {
    const comb = combs[i].concat(numberArray(0, 5));
    const newCombs = rangeArray(6).map(mi => combToIndex(compose(comb, moves[mi].permutation).slice(0, 15)))
    for (let j = 0; j < innerLimit; j++) {
      const orient = rangeArray(5).reverse().map(o => mod(Math.floor(j / Math.pow(3, o)), 3));
      const orientFull = rangeArray(20).map(f => comb[f] === 1 ? orient.splice(-1)[0] : 99);
      for (let mi = 0; mi < 6; mi++) {
        const newOrientFull = rangeArray(15).map(q => orientFull[moves[mi].permutation[q]] + moves[mi].orientation[q]);
        const newOrient = newOrientFull.filter(o => o < 10);
        // J?
        const J = newOrient.reduce((sum, o, ind) => sum += (mod(o, 3) * Math.pow(3, ind)), 0);
        phaseMoveO[j + Math.pow(3, 5) * i][mi] = J + Math.pow(3, 5) * newCombs[mi];
      }
    }
  }
  return phaseMoveO;
}

export default moize(generatePhse23OrientionMtable);
