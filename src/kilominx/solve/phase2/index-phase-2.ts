import { State } from '../../state';
import { combToIndex } from '../../../util/permutation';
import { rangeArray } from '../../../util/arrays';
import { sum } from '../../../util/math';

const indexPhase2 = (state: State): [number, number] => {
  const { permutation, orientation } = state;
  const indexC = combToIndex(rangeArray(15).map(i => +(permutation[i] >= 15)));
  const indexO = sum(permutation.slice(0, 15).filter(p => p >= 15).map((p, i) => orientation[permutation.indexOf(p)] * Math.pow(3, i))) + 243 * indexC;
  const indexP = sum(rangeArray(5).map(i => permutation.indexOf(15 + i) * Math.pow(15, i)));
  return [indexO, indexP];
}

export {
  indexPhase2
}
