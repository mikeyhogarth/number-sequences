/**
 * Arithmetic
 *
 * @param {*} start The number to start at
 * @param {*} n The number to increment by each time
 *
 * Produces an arithmetic number sequence. Arithmetic number
 * sequences are sequences which add or subtract a certain amount
 * for each iteration.
 */
export function Arithmetic(start: number, n: number): Sequence {
  return {
    generate(times: number) {
      const arr = new Array(times).fill(0);

      return arr.map((_, idx) => {
        return start + n * idx;
      });
    },
  };
}
