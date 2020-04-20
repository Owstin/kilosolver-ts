import { State } from '../../state';
import { MoveSequence, newMove } from '../../sequence';
import { searchPhase1 } from './search-phase-1';

export const solvePhase1 = (state: State): MoveSequence => {
  const p = state.permution;
  const lastFive = p.slice(-5);
  if (lastFive.every((_, i) => p.indexOf(i + 15) < 15)) {
    return [];
  }
  if (lastFive.every((_, i) => p.indexOf(i + 15) >= 5)) {
    return [[6, 1]];
  }
  const flags = p.map((_, i) => +(p[i] >= 15))
  let depth = 0;
  let solution = undefined;
  while (solution === undefined) {
    depth += 1;
    solution = searchPhase1(flags, depth);
  }

  return solution.concat([newMove(6, 1)]);
}