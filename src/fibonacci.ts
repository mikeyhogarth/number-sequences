import { Seq } from "immutable";

/**
 * Fibonacci
 *
 * Produces an Fibonacci number sequence. In Fibonacci number
 * sequences, each number is the sum of the two preceding
 * ones, starting from 0 and 1.
 */

// Public API
export default function Fibonacci(): Seq.Indexed<number> {
  return Seq<number>(generator());
}

// Generator
function* generator(current = 0, next = 1): Generator<number> {
  yield current;
  yield* generator(next, current + next);
}
