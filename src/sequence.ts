export interface Sequence {
  generate: (qty: number) => Array<number>;
  nth: (n: number) => number;
}

/**
 * NextFunction
 *
 * Function should be implemented by a sequence in order to
 * calculate the next element in the sequence. The function
 * will have the following parameters yielded to it;
 *
 * @param current The latest number that was generated
 * @param arr All numbers generated so far
 *
 */
interface NextFunction {
  (current: number, arr: Array<Number>): number;
}

/**
 * creates a sequence
 * @param start Which number to start at
 * @param next A function to calculate, for each element, what comes next
 */
export function createSequence(start: number, next: NextFunction): Sequence {
  return {
    /**
     * generate a sequence of a certain length
     * @param qty number of elements to generate
     */
    generate(qty: number) {
      return Array.apply(0, Array(qty - 1)).reduce(
        (acc: Array<number>, _: number, idx: number) => {
          return [...acc, next(acc[idx], acc)];
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
