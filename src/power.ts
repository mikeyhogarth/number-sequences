import { Seq } from "immutable";

/**
 * Power
 *
 * Given a number, find all it's positive powers.
 * e.g. for 2 it would be 2, 4, 8, 16....
 *      for 3 it would be 3, 9, 27, 81....
 */

// Public API
export default (x: number): Seq.Indexed<number> => Seq<number>(generator(x));

// Generator
function* generator(current: number, initial?: number): Generator<number> {
  yield current;
  const x = initial || current;
  yield* generator(current * x, x);
}
