import { createSequence, Sequence } from "../sequence";

/**
 * Collatz
 *
 * @param {*} start The number to start at
 *
 * Produces the Collatz sequence for a given start number
 * After (presumably) hitting 1, will loop infinitely on 1 -> 4 -> 2 -> 1 etc
 */

export const Collatz = (start: number): Sequence => {
  const next = (prev: Array<number>): number => {
    const n = prev[prev.length - 1];
    return n % 2 === 0 ? n / 2 : 3 * n + 1;
  };

  return createSequence(start, next);
};
