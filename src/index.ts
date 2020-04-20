import { State } from './kilominx/state';
import bigInt from 'big-integer';
import { solvePhase1 } from './kilominx/solve/phase1/solve-phase-1';
import { printMoveSequece } from './kilominx/sequence';

// stuff goes here maybe
const testState = new State(bigInt('888942217053048776751679251'));

const sol1 = solvePhase1(testState);

console.log(sol1);
console.log(printMoveSequece(sol1));