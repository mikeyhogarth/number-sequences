import { Prime } from "./prime";

describe("The prime sequence", () => {
  describe("generate", () => {
    it("creates the prime sequence", () => {
      const seq = Prime();
      expect(seq.generate(10)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });
  });

  describe("nth", () => {
    it("calculates the nth element in the sequence", () => {
      const seq = Prime();
      expect(seq.nth(20)).toEqual(71);
    });
  });
});
