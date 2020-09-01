export interface Sequence {
  next: () => number;
  nextN: (n: number) => Array<number>;
}

/**
 * creates a sequence from a generator
 */
export function createSequence(generator: Generator): Sequence {
  /**
   * next
   * Genreate and return the next item in the sequence
   */
  function next(): number {
    return generator.next().value;
  }

  /**
   * nextN
   * Generate and return the next N items in the sequence
   * @param n the number to generate
   */
  function nextN(n: number): Array<number> {
    function nextNHelper(n: number, arr: Array<number> = []): Array<number> {
      return n === 0
        ? arr
        : nextNHelper(n - 1, [...arr, generator.next().value]);
    }
    return nextNHelper(n);
  }

  return {
    next,
    nextN,
  };
}
