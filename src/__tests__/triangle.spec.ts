import Triangle from "../triangle";

describe("The triangle sequence", () => {
  describe("generate", () => {
    it("creates the triangle sequence", () => {
      const seq = Triangle();
      expect(seq.take(5).toArray()).toEqual([1, 3, 6, 10, 15]);
    });
  });
});
