import { Seq } from "immutable";

/**
 * Twin
 *
 * Given two sequences, interweave them, alternating terms
 */

// Public API
export default (
  a: Seq.Indexed<number>,
  b: Seq.Indexed<number>
): Seq.Indexed<number> => Seq<number>(generator(a, b));

// Generator
function* generator(
  a: Seq.Indexed<number>,
  b: Seq.Indexed<number>,
  counter: number = 0
): Generator<number> {
  yield counter % 2 === 0 ? a.get(counter / 2) : b.get((counter - 1) / 2);
  yield* generator(a, b, counter + 1);
}
