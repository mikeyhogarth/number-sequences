import { Collatz } from "./collatz";

describe("Collatz Sequences", () => {
  describe("generate", () => {
    it("creates a Collatz sequence", () => {
      const seq = Collatz(5);
      expect(seq.generate(6)).toEqual([5, 16, 8, 4, 2, 1]);
    });
  });

  describe("nth", () => {
    it("calculates the nth element in the sequence", () => {
      const seq = Collatz(7);
      expect(seq.nth(5)).toEqual(17);
    });
  });
});
