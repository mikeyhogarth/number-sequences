import { Seq } from "immutable";

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
export default (start: number, commonRatio: number): Seq.Indexed<number> =>
  Seq<number>(generator(start, commonRatio));

// Generator
function* generator(current = 0, commonRatio = 1): Generator<number> {
  yield current;
  yield* generator(current * commonRatio, commonRatio);
}
