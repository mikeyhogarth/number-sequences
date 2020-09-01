export interface Sequence {
  next: () => number;
  nextN: (n: number) => Array<number>;
}

/**
 * creates a sequence from a generator
 */
export function createSequence(generator: Generator): Sequence {
  return {
    /**
     * generate the next item in the sequence
     */
    next() {
      return generator.next().value;
    },

    /**
     * generate the next N items in the sequence
     * @param qty {number} number of elements to generate
     * @returns array of next N items in the sequence
     */
    nextN(n: number, arr: Array<number> = []) {
      if (n === 0) return arr;
      return this.nextN(n - 1, [...arr, generator.next().value]);
    },
  };
}
