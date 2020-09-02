import { createSequence, Sequence } from "../sequence";

/**
 * Fibonacci
 *
 * Produces an Fibonacci number sequence. In Fibonacci number
 * sequences, each number is the sum of the two preceding
 * ones, starting from 0 and 1.
 */

// Public API
export default function Fibonacci(): Sequence {
  return createSequence(generator());
}

// Generator
function* generator(current = 0, next = 1): Generator {
  yield current;
  yield* generator(next, current + next);
}
