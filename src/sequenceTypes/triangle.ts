import { createSequence, Sequence } from "../sequence";

/**
 * Triangle
 *
 * The triangle number sequence - 1, 3, 6, 10, 15, 21
 *   = 1, (1 + 2), (1 + 2 + 3) etc
 */

export const Triangle = (): Sequence => {
  const next = (prev: Array<number>): number =>
    prev[prev.length - 1] + prev.length + 1;

  const nth = (n: number): number => (n * (n + 1)) / 2;

  return createSequence(1, next, nth);
};
