import { shallowEqual } from 'fast-equals';
import { rangeArray, numberArray } from '../util/arrays';

export class TwistedPermutation {
  constructor(
    private permution: number[],
    private orientation: number[],
    private modulus: number
  ) { }

  isEqual(otherPermutation: TwistedPermutation): boolean {
    return (
      shallowEqual(this.permution, otherPermutation.permution) &&
      shallowEqual(this.orientation, otherPermutation.orientation) &&
      shallowEqual(this.modulus, otherPermutation.modulus)
    );
  }

  length() {
    return this.permution.length;
  }

  multiply(otherPermutation: TwistedPermutation) {
    const p = [];
    const o = [];
    for (let i = 0; i < this.length(); i++) {
      p[i] = this.permution[otherPermutation.permution[i]];
      o[i] = (this.orientation[otherPermutation.permution[i]] + otherPermutation.orientation[i]) % this.modulus;
    }
    this.permution = p;
    this.orientation = o;
    return this;
  }

  invert() {
    const p = numberArray(undefined, this.length());
    const o = numberArray(undefined, this.length());
    for (let i = 0; i < this.length(); i++) {
      p[this.permution[i]] = i;
      o[this.permution[i]] = (-1 * this.orientation[i]) % this.modulus; 
    }
    this.permution = p;
    this.orientation = o;
    return this;
  }

  pow(num: number): TwistedPermutation {
    if (num === 0) {
      this.permution = rangeArray(this.length());
      this.orientation = numberArray(0, this.length());
      return this;
    } else if (num === 1) {
      return this;
    } else if (num < 0) {
      return this.invert().pow(-num);
    } else {
      const half = this.pow(Math.floor(num / 2));
      return half.multiply(half).multiply(this).pow(num % 2);
    }
  }
}
