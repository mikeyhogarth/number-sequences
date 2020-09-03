import { createSequence, Sequence } from "../sequence";

/**
 * Collatz
 *
 * @param {*} start The number to start at
 *
 * Produces the Collatz sequence for a given start number
 * After (presumably) hitting 1, will loop infinitely on 1 -> 4 -> 2 -> 1 etc
 */

// Public API
const Collatz = (start: number): Sequence => {
  return createSequence(generator(start));
};

// Generator
function* generator(current: number): Generator {
  yield current;
  yield* generator(current % 2 === 0 ? current / 2 : 3 * current + 1);
}

export default Collatz;
