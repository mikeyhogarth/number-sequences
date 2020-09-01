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
    next(): number {
      return generator.next().value;
    },

    /**
     * generate the next N items
     * @param qty {number} number of elements to generate
     * @returns array of next N items in the sequence
     */
    nextN(n: number) {
      return Array.apply(0, Array(n - 1)).reduce(
        (acc: Array<number>, _: number, idx: number) => {
          return [...acc, this.next()];
        },
        [this.next()]
      );
    },
  };
}
