import { Triangle } from "./triangle";

describe("The triangle sequence", () => {
  describe("generate", () => {
    it("creates the triangle sequence", () => {
      const seq = Triangle();
      expect(seq.generate(5)).toEqual([1, 3, 6, 10, 15]);
    });
  });

  describe("nth", () => {
    it("calculates the nth element in the sequence", () => {
      const seq = Triangle();
      expect(seq.nth(6)).toEqual(21);
    });
  });
});
