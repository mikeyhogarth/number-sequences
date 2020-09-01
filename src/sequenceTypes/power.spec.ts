import { Power } from "./power";

describe("The power sequence", () => {
  describe("generate", () => {
    it("creates the power sequence for a number", () => {
      const seq = Power(3);
      expect(seq.generate(4)).toEqual([3, 9, 27, 81]);
    });
  });

  describe("nth", () => {
    it("calculates the nth element in the sequence", () => {
      const seq = Power(2);
      expect(seq.nth(10)).toEqual(1024);
    });
  });
});
