import { compose } from '../../../util/arrays';
import { moves } from '../../moves';
import { MoveSequence, newMove } from '../../sequence';

export const searchPhase1 = (flags: number[], depth: number, last?: number): MoveSequence | undefined  => {
  if (depth === 0) {
    if (flags.slice(0, 5).some((_, i) => flags[i])) {
      return undefined;
    }
    return [];
  }
  for (let moveIndex = 0; moveIndex < 6; moveIndex++) {
    if (moveIndex === last) {
      continue;
    }
    for (let r = 1; r < 5; r++) {
      const newFlags = compose(flags, (moves[moveIndex].pow(r)).permution);
      const sol = searchPhase1(newFlags, depth - 1, moveIndex);
      if (sol !== undefined) {
        return [newMove(moveIndex, r)].concat(sol);
      }
    }
  }
  return undefined
}
