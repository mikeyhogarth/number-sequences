import { Seq } from "immutable";

export interface Sequence {
  nextN: (n: number) => Array<number>;
}

/**
 * creates a sequence from a generator
 */
export function createSequence(generator: Generator<number>): Sequence {
  const seq = Seq(generator);

  /**
   * nextN
   * Generate and return the next N items in the sequence
   * @param n the number to generate
   */
  function nextN(n: number): Array<number> {
    return seq.take(n).toArray();
  }

  return {
    nextN,
  };
}
