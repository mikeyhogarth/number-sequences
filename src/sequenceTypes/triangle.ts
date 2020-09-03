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
function* generator(current: number, prev: Array<number> = []): Generator {
  prev.push(current);
  yield current;
  const next = prev[prev.length - 1] + prev.length + 1;
  yield* generator(next, prev);
}

export default Triangle;
