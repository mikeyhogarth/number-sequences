import { createSequence, Sequence } from "../sequence";

/**
 * Power
 *
 * Given a number, find all it's positive powers.
 * e.g. for 2 it would be 2, 4, 8, 16....
 *      for 3 it would be 3, 9, 27, 81....
 */

export const Power = (x: number): Sequence => {
  const next = (prev: Array<number>): number => Math.pow(x, prev.length + 1);

  const nth = (n: number): number => Math.pow(x, n);

  return createSequence(x, next, nth);
};
