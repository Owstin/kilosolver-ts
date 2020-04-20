import { State } from './state';
import { moves, moveNames } from './moves';

export type Move = [number, number];
export type MoveSequence = Move[];

const newMove = (i: number, r: number): Move => {
  return [i, r];
}

const applyMoveSequence = (state: State, moveSequence: MoveSequence) => {
  for (const [move, r] of moveSequence) {
    state = state.multiply(moves[move].pow(r));
  }
  return state;
}

const printMoveSequece = (moveSequence: MoveSequence) => {
  const sequence = [];
  for (const [move, r] of moveSequence) {
    // if it's ever undefined bad things will happen
    const suffix = [undefined, '', '2', '2\'', ''][r]
    sequence.push(moveNames[move] + suffix);
  }
  return sequence.join(' ');
}

export {
  newMove,
  applyMoveSequence,
  printMoveSequece
}
