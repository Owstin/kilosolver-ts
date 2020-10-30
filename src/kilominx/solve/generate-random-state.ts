import { State } from '../state';
import bigInt from 'big-integer';
import { factorial } from '../../util/math';

type RandomGenerator = { random: () => number };

const generateRandomState = (randomGenerator: RandomGenerator = Math) => {
  return new State(bigInt.randBetween(0, factorial(20).divide(2).multiply(bigInt(3).pow(19)), randomGenerator.random));
};

export {
  generateRandomState
}
