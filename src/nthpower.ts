import { Seq } from "immutable";

/**
 * Power
 *
 * Generate all the nth powers - e.g. all squares, all cubes etc
 */

// Public API
export default (n: number): Seq.Indexed<number> => Seq<number>(generator(n));

// Generator
function* generator(n: number, current: number = 1): Generator<number> {
  yield current;
  const x = Math.pow(Math.pow(current, 1 / n) + 1, n);
  yield* generator(n, x);
}
