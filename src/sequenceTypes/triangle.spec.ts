import Triangle from "./triangle";

describe("The triangle sequence", () => {
  describe("generate", () => {
    it("creates the triangle sequence", () => {
      const seq = Triangle();
      expect(seq.nextN(5)).toEqual([1, 3, 6, 10, 15]);
    });
  });
});
