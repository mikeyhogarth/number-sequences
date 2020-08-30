export function Arithmetic(start, n) {
  return {
    generate(times) {
      const arr = new Array(times).fill(0);

      return arr.map((item, idx) => {
        return start + n * idx;
      });
    },
  };
}
