import { createSequence, Sequence } from "../sequence";

/**
 * Arithmetic
 *
 * @param {*} start The number to start at
 * @param {*} commonDifference The number to increment by each time
 *
 * Produces an arithmetic number sequence. Arithmetic number
 * sequences are sequences which add or subtract a certain amount
 * for each iteration.
 */

export function Arithmetic(start: number, commonDifference: number): Sequence {
  const next = (current: number) => current + commonDifference;

  return createSequence(start, next);
}
