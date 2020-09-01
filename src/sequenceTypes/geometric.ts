import { createSequence, Sequence } from "../sequence";

/**
 * Geometric
 *
 * @param {*} start The number to start at
 * @param {*} commonRatio The number to multiply by each time
 *
 * Produces a geometric number sequence. Geometric number
 * sequences are sequences which multiply or divide by a certain
 * amount for each iteration.
 */

// Public API
export function Geometric(start: number, commonRatio: number): Sequence {
  return createSequence(generator(start, commonRatio));
}

// Generator
function* generator(current = 0, commonRatio = 1): Generator {
  yield current;
  yield* generator(current * commonRatio, commonRatio);
}
