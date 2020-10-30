import { shallowEqual } from 'fast-equals';
import { rangeArray, numberArray } from '../util/arrays';
import { mod } from '../util/math';

export class TwistedPermutation {
  constructor(
    public permutation: number[],
    public orientation: number[],
    private modulus: number
  ) { }

  isEqual(otherPermutation: TwistedPermutation): boolean {
    return (
      shallowEqual(this.permutation, otherPermutation.permutation) &&
      shallowEqual(this.orientation, otherPermutation.orientation) &&
      shallowEqual(this.modulus, otherPermutation.modulus)
    );
  }

  length() {
    return this.permutation.length;
  }

  multiply(otherPermutation: TwistedPermutation) {
    const p = [];
    const o = [];
    for (let i = 0; i < this.length(); i++) {
      p[i] = this.permutation[otherPermutation.permutation[i]];
      o[i] = mod((this.orientation[otherPermutation.permutation[i]] + otherPermutation.orientation[i]), this.modulus);
    }
    return new TwistedPermutation(p, o, this.modulus);
  }

  invert() {
    const p = numberArray(undefined, this.length());
    const o = numberArray(undefined, this.length());
    for (let i = 0; i < this.length(); i++) {
      p[this.permutation[i]] = i;
      o[this.permutation[i]] = mod((-1 * this.orientation[i]), this.modulus); 
    }
    return new TwistedPermutation(p, o, this.modulus);
  }

  pow(num: number): TwistedPermutation {
    if (num === 0) {
      const p = rangeArray(this.length());
      const o = numberArray(0, this.length());
      return new TwistedPermutation(p, o, this.modulus);
    } else if (num === 1) {
      return this;
    } else if (num < 0) {
      return this.invert().pow(-num);
    } else {
      const half = this.pow(Math.floor(num / 2));
      return half.multiply(half.multiply(this.pow(mod(num, 2))));
    }
  }
}
