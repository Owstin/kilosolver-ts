import { State } from './state';
import { permutationFromCycles, unsparsifyList } from '../util/permutation';
import { numberArray } from '../util/arrays';

const moveU = new State([permutationFromCycles([0, 1, 2, 3, 4], 20), numberArray(0, 20)]);
const moveR = new State([permutationFromCycles([4, 3, 11, 12, 13], 20), unsparsifyList({4: 2, 3: 1, 11: 1, 12: 1, 13: 1}, 20)]);
const moveF = new State([permutationFromCycles([3, 2, 9, 10, 11], 20), unsparsifyList({3: 2, 2: 1, 9: 1, 10: 1, 11: 1}, 20)]);
const moveL = new State([permutationFromCycles([2, 1, 7, 8, 9], 20), unsparsifyList({2: 2, 1: 1, 7: 1, 8: 1, 9: 1}, 20)]);
const moveBL = new State([permutationFromCycles([1, 0, 5, 6, 7], 20), unsparsifyList({1: 2, 0: 1, 5: 1, 6: 1, 7: 1}, 20)]);
const moveBR = new State([permutationFromCycles([0, 4, 13, 14, 5], 20), unsparsifyList({0: 2, 4: 1, 13: 1, 14: 1, 5: 1}, 20)]);
const movex2 = new State([[15, 16, 17, 18, 19, 10, 9, 8, 7, 6, 5, 14, 13, 12, 11, 0, 1, 2, 3, 4], numberArray(0, 20)]);

const moves = [
  moveU,
  moveR,
  moveF,
  moveL,
  moveBL,
  moveBR,
  movex2
];

const moveNames = ['U', 'R', 'F', 'L', 'BL', 'BR', 'flip']

export {
  moves,
  moveNames
}
