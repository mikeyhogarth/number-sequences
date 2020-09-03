import { Seq } from "immutable";

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

// Public API
export default function Arithmetic(
  start: number,
  commonDifference: number
): Seq.Indexed<number> {
  return Seq<number>(generator(start, commonDifference));
}

// Generator
function* generator(current = 0, commonDifference = 1): Generator<number> {
  yield current;
  yield* generator(current + commonDifference, commonDifference);
}
