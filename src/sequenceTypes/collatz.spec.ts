import Collatz from "./collatz";

describe("Collatz Sequences", () => {
  describe("generate", () => {
    it("creates a Collatz sequence", () => {
      const seq = Collatz(5);
      expect(seq.nextN(6)).toEqual([5, 16, 8, 4, 2, 1]);
    });
  });
});
