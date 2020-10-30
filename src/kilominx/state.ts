import { TwistedPermutation } from './twisted-permutation';
import { BigInteger } from 'big-integer';
import { indexToEvenPermutation } from '../util/permutation';
import bigInt from 'big-integer';
import { sum, mod } from '../util/math';

type StateArgs = BigInteger | number[][];

export class State extends TwistedPermutation {
  constructor(args: StateArgs) {
    let p: number[] = [];
    let o: number[] = [];
    if (Array.isArray(args)) {
      [p, o] = args;
    } else {
      const { quotient: index_p, remainder: index_o } = args.divmod(3 ** 19);
      p = indexToEvenPermutation(index_p, 20);
      for (let i = 0; i < 19; i++) {
        o[i] = +index_o.divide(bigInt(3).pow(i)).mod(3).toString(10);
      }
      o.push(mod(-sum(o), 3));
    }
    super(p, o, 3);
  }
}
