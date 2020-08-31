import { Geometric, GeometricOperator } from "./geometric";

describe("Arithmetic Sequences", () => {
  describe("generate", () => {
    it("creates an arithmetic sequence using multiply", () => {
      const seq = Geometric(1, 2, GeometricOperator.Multiply);
      expect(seq.generate(5)).toEqual([1, 2, 4, 8, 16]);
    });

    it("creates an arithmetic sequence using divide", () => {
      const seq = Geometric(16, 2, GeometricOperator.Divide);
      expect(seq.generate(5)).toEqual([16, 8, 4, 2, 1]);
    });
  });

  describe("nth", () => {
    it("calculates the nth element in the sequence using multiply", () => {
      const seq = Geometric(5, 4, GeometricOperator.Multiply);
      expect(seq.nth(5)).toEqual(1280);
    });

    it("calculates the nth element in the sequence using divide", () => {
      const seq = Geometric(10, 2, GeometricOperator.Divide);
      expect(seq.nth(5)).toEqual(0.625);
    });
  });
});
