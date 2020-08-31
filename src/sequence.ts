export interface ISequence {
  generate: (qty: number) => Array<number>;
  nth: (n: number) => number;
}

export function createSequence(start: number, next: Function): ISequence {
  return {
    /**
     * generate a sequence of a certain length
     * @param qty number of elements to generate
     */
    generate(qty: number) {
      return Array.apply(0, Array(qty - 1)).reduce(
        (acc: Array<number>, _: number, idx: number) => {
          return [...acc, next(acc[idx])];
        },
        [start]
      );
    },

    /**
     * generate the nth element of a sequence
     * @param n which element to generate
     */
    nth(n: number) {
      return this.generate(n)[n - 1];
    },
  };
}
