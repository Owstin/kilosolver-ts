import { State } from './kilominx/state';
import bigInt from 'big-integer';
import { solvePhase1 } from './kilominx/solve/phase1/solve-phase-1';
import { printMoveSequece } from './kilominx/sequence';
import { indexPhase2 } from './kilominx/solve/phase2/index-phase-2';
import { combination } from './util/math';
import { generatePhse23OrientionMtable } from './kilominx/solve/tables';
import { product } from './util/arrays';

// stuff goes here maybe
const testState = new State(bigInt('888942217053048776751679251'));

// const sol1 = solvePhase1(testState);

// console.log(sol1);
// console.log(printMoveSequece(sol1));
// console.log(generatePhse23OrientionMtable());
// const table = generatePhse23OrientionMtable();
// console.log(table.slice(0, 5));
console.log(product(3, 2));