import { createSequence, Sequence } from "../sequence";

/**
 * Triangle
 *
 * The triangle number sequence - 1, 3, 6, 10, 15, 21
 *   = 1, (1 + 2), (1 + 2 + 3) etc
 */

// Public API
const Triangle = (): Sequence => {
  return createSequence(generator(1));
};

// Generator
// The general formula for the nth triangle number is n*(n + 1)/2
// If the current number is x, then x = n*(n + 1)/2
// and so with a bit of algebra and the quadratic formula (only taking the positive answer)
// n = (1 + 8*x)^(1/2)/2
// So we can work out from the current value that it's the nth value, and then just
// add n + 1 to get the next term
// e.g. if current term is 10, then the above formula tells us it's the 4th term,
// so we add 5 to get the 5th term = 15
function* generator(current: number): Generator {
  yield current;
  const n = (Math.sqrt(1 + 8 * current) - 1) / 2;
  yield* generator(current + n + 1);
}

export default Triangle;
