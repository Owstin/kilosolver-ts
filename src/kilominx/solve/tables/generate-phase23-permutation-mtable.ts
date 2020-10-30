import { numberArray } from '../../../util/arrays';
import { moves } from '../../moves';

const generatePhase23PermutationMtable = () => {
  const phase32MoveP = new Array(Math.pow(15, 5)).fill(undefined).map(() => numberArray(undefined, 6));
  const single = new Array(15).fill(undefined).map(() => numberArray(undefined, 6));
  for (let i = 0; i < 15; i++) {
    for (let mi = 0; mi < 6; mi++) {
      single[i][mi] = moves[mi].permutation.indexOf(i);
    }
  }
};

export default generatePhase23PermutationMtable;
